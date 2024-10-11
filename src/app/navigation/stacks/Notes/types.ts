import { TNotesStackMainParams } from '@/screens/Notes/Main'
import { EScreens } from '../../screens'
import { TNotesStackNoteParams } from '@/screens/Notes/Note'

export type TNotesStack = {
  [EScreens.NotesMain]: TNotesStackMainParams
  [EScreens.NotesNote]: TNotesStackNoteParams
}
