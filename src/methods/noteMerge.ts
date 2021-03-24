import { NoteMerged, Note } from '../../types'

function mergeNote(notes: Note[]): (Note | NoteMerged)[] {
    const newNotes: (Note | NoteMerged)[] = []
    for (let i = 0; i < notes.length; i++) {
        const cur = notes[i]
        const next = notes[i + 1]

        if (
            next &&
            cur.type !== next.type &&
            cur.date.toString() === next.date.toString()
        ) {
            newNotes.push({
                ...next,
                type: 'Note',
                note: cur.content
            })
            i++
        } else if (cur.type === 'Highlight') {
            newNotes.push(cur)
        }
    }

    return newNotes
}

export default mergeNote
