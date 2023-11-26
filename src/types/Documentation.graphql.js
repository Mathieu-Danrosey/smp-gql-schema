export default `
# src/graphql/types/Documentation.graphql.js

type Documentation implements ServicesEntity & ServicesNavigableEntity & ServicesStatable {
  documentationID: ID!
  uniqRef: String
  slug: String
  authorID: ID
  serviceID: ID
  title: String
  level: Int
  order: Int
  description: String
  parentDocumentationID: ID 
  state: ObjectStatus
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}

input DocumentationInput {
  documentationID: ID
  uniqRef: String
  slug: String
  authorID: ID
  serviceID: ID
  title: String
  level: Int
  order: Int
  description: String
  parentDocumentationID: ID
  state: ObjectStatus
}

type DocumentationResponse implements FallibleResponse {
  data: [Documentation!]
  errors: [MutationError!]
}

extend type Query {
  documentation(documentationID: ID!): DocumentationResponse
  documentations(
    pagination: PaginationInput,
    sort: SortInput,
    filter: [FilterInput!]
  ): DocumentationResponse
}

type Mutation {
  createDocumentation(input: DocumentationInput!): DocumentationResponse!
  updateDocumentation(documentationID: ID!, input: DocumentationInput!): DocumentationResponse!
  deleteDocumentation(documentationID: ID!): MutationResponse!
}

type Subscription {
  documentationAdded: Documentation!
  documentationUpdated: Documentation!
  documentationDeleted: Documentation!
}
`;