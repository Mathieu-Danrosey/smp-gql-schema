export default `
# src/graphql/types/Application.graphql.js
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.3",
        import: ["@key", "@shareable"])
type Application  @shareable{
  applicationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  title: String
  description: String
  officialName: String
  developerID: ID
  authKey: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: JSON
  state: ObjectStatus
  createdAt: DateTime!
  updatedAt: DateTime
  deletedAt: DateTime
}

input ApplicationInput {
  applicationID: ID
  authorID: ID
  title: String
  description: String
  officialName: String
  developerID: ID
  authKey: String
  plan: String
  isOfficialApp: Boolean
  appConfiguration: String
  state: ObjectStatus
}

type ApplicationResponse   @shareable{
  data: [Application!]
  errors: [MutationError!]
}

extend type Query {
  application(applicationID: ID!): ApplicationResponse
  applications(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): ApplicationResponse
}

extend type User  @shareable{
  applications(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): [Application!]
}

type Mutation  @shareable {
  createApplication(input: ApplicationInput!): ApplicationResponse!
  updateApplication(applicationID: ID!, input: ApplicationInput!): ApplicationResponse!
  deleteApplication(applicationID: ID!): MutationResponse!
}

type Subscription  @shareable {
  applicationAdded: Application!
  applicationUpdated: Application!
  applicationDeleted: Application!
}
`;
