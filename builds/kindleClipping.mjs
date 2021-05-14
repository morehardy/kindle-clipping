/* kindle clipping 1.0.4 MTI 2.0 */
import os from 'os';
import fs from 'fs';
import path from 'path';

const highlightRegex = /(Highlight|标注)/;
const noteRegex = /(Note|笔记)/;
const addRegex = /(Added on|添加于)/;

function labelParser(label) {
    var _a, _b;
    const numberRegex = /[0-9]+/;
    let { pageTypeText, locationText, dateText } = labelSplit(label);
    let type = "Unknown";
    if (highlightRegex.test(pageTypeText)) {
        type = "Highlight";
    }
    if (noteRegex.test(pageTypeText)) {
        type = "Note";
    }
    const page = ((_a = pageTypeText.match(numberRegex)) === null || _a === void 0 ? void 0 : _a[0]) || '';
    const location = ((_b = locationText.match(numberRegex)) === null || _b === void 0 ? void 0 : _b[0]) || '';
    const date = dateText.replace(addRegex, '').trim();
    return {
        type,
        page,
        location,
        date,
    };
}
function labelSplit(label) {
    const labelArr = label.split("|");
    if (labelArr.length === 2) {
        const [pageTypeText, dateText] = labelArr;
        return {
            pageTypeText,
            locationText: '',
            dateText,
        };
    }
    else {
        let [pageTypeText, locationText, dateText] = labelArr;
        return {
            pageTypeText,
            locationText,
            dateText,
        };
    }
}

function lineParser(data) {
    const [bookName, label, _, content] = data;
    return {
        bookName,
        content,
        ...labelParser(label),
    };
}

function clippingParser(data) {
    const lines = data.split('\n').slice(0, -1);
    const noteArr = [];
    while (lines.length > 0) {
        noteArr.push(lineParser(lines.splice(0, 5)));
    }
    return noteArr;
}

function mergeNote(notes) {
    const newNotes = [];
    for (let i = 0; i < notes.length; i++) {
        const cur = notes[i];
        const next = notes[i + 1];
        if (next &&
            cur.type !== next.type &&
            cur.date.toString() === next.date.toString()) {
            newNotes.push({
                ...next,
                type: 'Note',
                note: cur.content
            });
            i++;
        }
        else if (cur.type === 'Highlight') {
            newNotes.push(cur);
        }
    }
    return newNotes;
}

const MAC_PATH = '/Volumes/Kindle/documents/My Clippings.txt';
const osType = os.type();
function initClippingPath() {
    if (osType === 'Windows_NT') {
        return getWindowsPath();
    }
    else if (osType === 'Darwin') {
        return path.resolve(__dirname, MAC_PATH);
    }
    throw new Error('unSupport os');
}
function getWindowsPath() {
    for (let i = 1; i < 9; i++) {
        const diskCode = String.fromCharCode('C'.charCodeAt(0) + i);
        const _path = path.resolve(`${diskCode}:/documents/My Clippings.txt`);
        const exist = fs.existsSync(_path);
        if (exist)
            return _path;
    }
    return 'path';
}

function dataFromPath(path) {
    const exist = fs.existsSync(path);
    if (!exist) {
        throw new Error(`${path} not exist, please make sure the kindle device is connected properly!`);
    }
    const data = fs.readFileSync(path);
    return data.toString('utf8');
}

class KindleClippingCore {
    constructor(customPath = '') {
        this.clippingPath = customPath ? path.resolve(__dirname, customPath) : initClippingPath();
    }
    getJson() {
        const noteData = dataFromPath(this.clippingPath);
        return clippingParser(noteData);
    }
    getMergedJson() {
        const noteData = dataFromPath(this.clippingPath);
        return mergeNote(clippingParser(noteData));
    }
}
function kindleClipping(customPath) {
    return new KindleClippingCore(customPath);
}
// export clippingParser

export default kindleClipping;
