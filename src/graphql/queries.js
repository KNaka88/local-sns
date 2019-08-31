/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    name
    description
    coordinate {
      latitude
      longitude
    }
    radius
    owner {
      id
      name
      tier
      teams {
        nextToken
      }
    }
    members {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      coordinate {
        latitude
        longitude
      }
      radius
      owner {
        id
        name
        tier
      }
      members {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMember = `query GetMember($id: ID!) {
  getMember(id: $id) {
    id
    name
    tier
    teams {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listMembers = `query ListMembers(
  $filter: ModelMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      tier
      teams {
        nextToken
      }
    }
    nextToken
  }
}
`;
