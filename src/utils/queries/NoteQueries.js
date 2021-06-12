import gql from "graphql-tag";

export const NoteQuery = gql`
  query Note($id: ID!) {
    note(id: $id) {
      id
      title
      content
      molecule
      linked
      shortId
    }
  }
`;
