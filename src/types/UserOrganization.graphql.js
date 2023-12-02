export default `
# src/graphql/types/UserOrganization.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])

type UserOrganization implements ServicesEntity & ServicesNavigableEntity & ServicesStatable @shareable {
  userOrganizationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  legend: String
  userID: ID
  roleID: ID
  organizationID: ID
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input UserOrganizationInput {
  userOrganizationID: ID
  authorID: ID
  legend: String
  userID: ID
  roleID: ID
  organizationID: ID
  state: ObjectStatus
}

type UserOrganizationResponse  @shareable {
  data: [UserOrganization!]
  errors: [MutationError!]
}

extend type Query @shareable {
  userOrganization(userOrganizationID: ID!): UserOrganizationResponse
  userOrganizations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): UserOrganizationResponse
}

type Mutation @shareable {
  createUserOrganization(input: UserOrganizationInput!): UserOrganizationResponse!
  updateUserOrganization(userOrganizationID: ID!, input: UserOrganizationInput!): UserOrganizationResponse!
  deleteUserOrganization(userOrganizationID: ID!): MutationResponse!
}

type Subscription @shareable {
  userOrganizationAdded: UserOrganization!
  userOrganizationUpdated: UserOrganization!
  userOrganizationDeleted: UserOrganization!
}
`;
