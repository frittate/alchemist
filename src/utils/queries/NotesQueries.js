import gql from "graphql-tag";

export const NotesQuery = gql`
  query Notes {
    notes {
      id
      title
      molecule
    }
  }
`;