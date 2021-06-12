import gql from "graphql-tag";

export const CreateNote = gql`
  mutation CreateNote($CreateNoteInput: CreateNoteInput!) {
    createNote(input: $CreateNoteInput) {
      id
    }
  }
`;

export const UpdateNote = gql`
  mutation UpdateNote($UpdateNoteInput: UpdateNoteInput!) {
    updateNote(input: $UpdateNoteInput) {
      id
    }
  }
`;

export const DeleteNote = gql`
  mutation DeleteNote($Id: ID!) {
    deleteNote(input: $Id) {
      id
    }
  }
`
