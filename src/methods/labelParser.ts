import { highlightRegex, noteRegex, addRegex } from "../const/note_type";
import type { Label, LabelRaw } from "../../types";

function labelParser(label: string): Label {
  const numberRegex = /[0-9]+/;
  let {pageTypeText, locationText, dateText} = labelSplit(label);

  let type: string = "Unknown";

  if (highlightRegex.test(pageTypeText)) {
    type = "Highlight";
  }
  if (noteRegex.test(pageTypeText)) {
    type = "Note";
  }
  
  const page = pageTypeText.match(numberRegex)?.[0] || '';
  const location = locationText.match(numberRegex)?.[0] || '';
  const date = dateText.replace(addRegex, '').trim()

  return {
    type,
    page,
    location,
    date,
  };
}

function labelSplit(label: string): LabelRaw  {
  const labelArr = label.split("|");
  if (labelArr.length === 2) {
    const [pageTypeText, dateText] = labelArr;
    return {
      pageTypeText,
      locationText: '',
      dateText,
    };
  } else {
    let [pageTypeText, locationText, dateText] = labelArr;
    return {
      pageTypeText,
      locationText,
      dateText,
    };
  }
}

export default labelParser