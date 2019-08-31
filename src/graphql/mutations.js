/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = `mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
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
export const updateTeam = `mutation UpdateTeam($input: UpdateTeamInput!) {
  updateTeam(input: $input) {
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
export const deleteTeam = `mutation DeleteTeam($input: DeleteTeamInput!) {
  deleteTeam(input: $input) {
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
export const createTeamMember = `mutation CreateTeamMember($input: CreateTeamMemberInput!) {
  createTeamMember(input: $input) {
    id
    member {
      id
      name
      tier
      teams {
        nextToken
      }
    }
    team {
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
  }
}
`;
export const updateTeamMember = `mutation UpdateTeamMember($input: UpdateTeamMemberInput!) {
  updateTeamMember(input: $input) {
    id
    member {
      id
      name
      tier
      teams {
        nextToken
      }
    }
    team {
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
  }
}
`;
export const deleteTeamMember = `mutation DeleteTeamMember($input: DeleteTeamMemberInput!) {
  deleteTeamMember(input: $input) {
    id
    member {
      id
      name
      tier
      teams {
        nextToken
      }
    }
    team {
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
  }
}
`;
export const createMember = `mutation CreateMember($input: CreateMemberInput!) {
  createMember(input: $input) {
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
export const updateMember = `mutation UpdateMember($input: UpdateMemberInput!) {
  updateMember(input: $input) {
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
export const deleteMember = `mutation DeleteMember($input: DeleteMemberInput!) {
  deleteMember(input: $input) {
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
