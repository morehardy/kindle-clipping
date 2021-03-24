import { Note, NoteOriginal } from "../../types";
import labelParser from "./labelParser"

function lineParser(data: NoteOriginal): Note {
  const [bookName, label, _, content] = data;
  return {
    bookName,
    content,
    ...labelParser(label),
  };
}

export default lineParser;
