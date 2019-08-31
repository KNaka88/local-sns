/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = `subscription OnCreateTeam {
  onCreateTeam {
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
export const onUpdateTeam = `subscription OnUpdateTeam {
  onUpdateTeam {
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
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
export const onCreateTeamMember = `subscription OnCreateTeamMember {
  onCreateTeamMember {
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
export const onUpdateTeamMember = `subscription OnUpdateTeamMember {
  onUpdateTeamMember {
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
export const onDeleteTeamMember = `subscription OnDeleteTeamMember {
  onDeleteTeamMember {
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
export const onCreateMember = `subscription OnCreateMember {
  onCreateMember {
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
export const onUpdateMember = `subscription OnUpdateMember {
  onUpdateMember {
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
export const onDeleteMember = `subscription OnDeleteMember {
  onDeleteMember {
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
