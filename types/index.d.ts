export type NoteOriginal = string[]

export interface Label {
  type: string
  page: string
  location: string
  date: string
}

export interface Note extends Label {
  bookName: string
  content: string
}

export interface NoteMerged extends Note {
  note: string
}

export interface LabelRaw {
  pageTypeText: string
  locationText: string
  dateText: string
}

declare namespace kindleClipping {
  export interface NoteMain {
    clippingPath?: string
    getJson: () => Note[]
    getMergedJson: () => (NoteMerged | Note)[]
  }
}
