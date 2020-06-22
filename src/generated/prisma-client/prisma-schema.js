module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAnswer {
  count: Int!
}

type AggregateAnswerSheet {
  count: Int!
}

type AggregateGrade {
  count: Int!
}

type AggregateLog {
  count: Int!
}

type AggregateTest {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Answer {
  id: ID!
  number: Int!
  answer: String!
}

type AnswerConnection {
  pageInfo: PageInfo!
  edges: [AnswerEdge]!
  aggregate: AggregateAnswer!
}

input AnswerCreateInput {
  id: ID
  number: Int!
  answer: String!
}

input AnswerCreateManyInput {
  create: [AnswerCreateInput!]
  connect: [AnswerWhereUniqueInput!]
}

type AnswerEdge {
  node: Answer!
  cursor: String!
}

enum AnswerOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  answer_ASC
  answer_DESC
}

type AnswerPreviousValues {
  id: ID!
  number: Int!
  answer: String!
}

input AnswerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  answer: String
  answer_not: String
  answer_in: [String!]
  answer_not_in: [String!]
  answer_lt: String
  answer_lte: String
  answer_gt: String
  answer_gte: String
  answer_contains: String
  answer_not_contains: String
  answer_starts_with: String
  answer_not_starts_with: String
  answer_ends_with: String
  answer_not_ends_with: String
  AND: [AnswerScalarWhereInput!]
  OR: [AnswerScalarWhereInput!]
  NOT: [AnswerScalarWhereInput!]
}

type AnswerSheet {
  id: ID!
  name: String!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer!]
}

type AnswerSheetConnection {
  pageInfo: PageInfo!
  edges: [AnswerSheetEdge]!
  aggregate: AggregateAnswerSheet!
}

input AnswerSheetCreateInput {
  id: ID
  name: String!
  answers: AnswerCreateManyInput
}

input AnswerSheetCreateManyInput {
  create: [AnswerSheetCreateInput!]
  connect: [AnswerSheetWhereUniqueInput!]
}

type AnswerSheetEdge {
  node: AnswerSheet!
  cursor: String!
}

enum AnswerSheetOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type AnswerSheetPreviousValues {
  id: ID!
  name: String!
}

input AnswerSheetScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [AnswerSheetScalarWhereInput!]
  OR: [AnswerSheetScalarWhereInput!]
  NOT: [AnswerSheetScalarWhereInput!]
}

type AnswerSheetSubscriptionPayload {
  mutation: MutationType!
  node: AnswerSheet
  updatedFields: [String!]
  previousValues: AnswerSheetPreviousValues
}

input AnswerSheetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnswerSheetWhereInput
  AND: [AnswerSheetSubscriptionWhereInput!]
  OR: [AnswerSheetSubscriptionWhereInput!]
  NOT: [AnswerSheetSubscriptionWhereInput!]
}

input AnswerSheetUpdateDataInput {
  name: String
  answers: AnswerUpdateManyInput
}

input AnswerSheetUpdateInput {
  name: String
  answers: AnswerUpdateManyInput
}

input AnswerSheetUpdateManyDataInput {
  name: String
}

input AnswerSheetUpdateManyInput {
  create: [AnswerSheetCreateInput!]
  update: [AnswerSheetUpdateWithWhereUniqueNestedInput!]
  upsert: [AnswerSheetUpsertWithWhereUniqueNestedInput!]
  delete: [AnswerSheetWhereUniqueInput!]
  connect: [AnswerSheetWhereUniqueInput!]
  set: [AnswerSheetWhereUniqueInput!]
  disconnect: [AnswerSheetWhereUniqueInput!]
  deleteMany: [AnswerSheetScalarWhereInput!]
  updateMany: [AnswerSheetUpdateManyWithWhereNestedInput!]
}

input AnswerSheetUpdateManyMutationInput {
  name: String
}

input AnswerSheetUpdateManyWithWhereNestedInput {
  where: AnswerSheetScalarWhereInput!
  data: AnswerSheetUpdateManyDataInput!
}

input AnswerSheetUpdateWithWhereUniqueNestedInput {
  where: AnswerSheetWhereUniqueInput!
  data: AnswerSheetUpdateDataInput!
}

input AnswerSheetUpsertWithWhereUniqueNestedInput {
  where: AnswerSheetWhereUniqueInput!
  update: AnswerSheetUpdateDataInput!
  create: AnswerSheetCreateInput!
}

input AnswerSheetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  answers_every: AnswerWhereInput
  answers_some: AnswerWhereInput
  answers_none: AnswerWhereInput
  AND: [AnswerSheetWhereInput!]
  OR: [AnswerSheetWhereInput!]
  NOT: [AnswerSheetWhereInput!]
}

input AnswerSheetWhereUniqueInput {
  id: ID
}

type AnswerSubscriptionPayload {
  mutation: MutationType!
  node: Answer
  updatedFields: [String!]
  previousValues: AnswerPreviousValues
}

input AnswerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnswerWhereInput
  AND: [AnswerSubscriptionWhereInput!]
  OR: [AnswerSubscriptionWhereInput!]
  NOT: [AnswerSubscriptionWhereInput!]
}

input AnswerUpdateDataInput {
  number: Int
  answer: String
}

input AnswerUpdateInput {
  number: Int
  answer: String
}

input AnswerUpdateManyDataInput {
  number: Int
  answer: String
}

input AnswerUpdateManyInput {
  create: [AnswerCreateInput!]
  update: [AnswerUpdateWithWhereUniqueNestedInput!]
  upsert: [AnswerUpsertWithWhereUniqueNestedInput!]
  delete: [AnswerWhereUniqueInput!]
  connect: [AnswerWhereUniqueInput!]
  set: [AnswerWhereUniqueInput!]
  disconnect: [AnswerWhereUniqueInput!]
  deleteMany: [AnswerScalarWhereInput!]
  updateMany: [AnswerUpdateManyWithWhereNestedInput!]
}

input AnswerUpdateManyMutationInput {
  number: Int
  answer: String
}

input AnswerUpdateManyWithWhereNestedInput {
  where: AnswerScalarWhereInput!
  data: AnswerUpdateManyDataInput!
}

input AnswerUpdateWithWhereUniqueNestedInput {
  where: AnswerWhereUniqueInput!
  data: AnswerUpdateDataInput!
}

input AnswerUpsertWithWhereUniqueNestedInput {
  where: AnswerWhereUniqueInput!
  update: AnswerUpdateDataInput!
  create: AnswerCreateInput!
}

input AnswerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  answer: String
  answer_not: String
  answer_in: [String!]
  answer_not_in: [String!]
  answer_lt: String
  answer_lte: String
  answer_gt: String
  answer_gte: String
  answer_contains: String
  answer_not_contains: String
  answer_starts_with: String
  answer_not_starts_with: String
  answer_ends_with: String
  answer_not_ends_with: String
  AND: [AnswerWhereInput!]
  OR: [AnswerWhereInput!]
  NOT: [AnswerWhereInput!]
}

input AnswerWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Grade {
  id: ID!
  score: Int!
}

type GradeConnection {
  pageInfo: PageInfo!
  edges: [GradeEdge]!
  aggregate: AggregateGrade!
}

input GradeCreateInput {
  id: ID
  score: Int!
}

input GradeCreateOneInput {
  create: GradeCreateInput
  connect: GradeWhereUniqueInput
}

type GradeEdge {
  node: Grade!
  cursor: String!
}

enum GradeOrderByInput {
  id_ASC
  id_DESC
  score_ASC
  score_DESC
}

type GradePreviousValues {
  id: ID!
  score: Int!
}

type GradeSubscriptionPayload {
  mutation: MutationType!
  node: Grade
  updatedFields: [String!]
  previousValues: GradePreviousValues
}

input GradeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GradeWhereInput
  AND: [GradeSubscriptionWhereInput!]
  OR: [GradeSubscriptionWhereInput!]
  NOT: [GradeSubscriptionWhereInput!]
}

input GradeUpdateDataInput {
  score: Int
}

input GradeUpdateInput {
  score: Int
}

input GradeUpdateManyMutationInput {
  score: Int
}

input GradeUpdateOneRequiredInput {
  create: GradeCreateInput
  update: GradeUpdateDataInput
  upsert: GradeUpsertNestedInput
  connect: GradeWhereUniqueInput
}

input GradeUpsertNestedInput {
  update: GradeUpdateDataInput!
  create: GradeCreateInput!
}

input GradeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  score: Int
  score_not: Int
  score_in: [Int!]
  score_not_in: [Int!]
  score_lt: Int
  score_lte: Int
  score_gt: Int
  score_gte: Int
  AND: [GradeWhereInput!]
  OR: [GradeWhereInput!]
  NOT: [GradeWhereInput!]
}

input GradeWhereUniqueInput {
  id: ID
}

type Log {
  id: ID!
  test: Test!
  grade: Grade!
}

type LogConnection {
  pageInfo: PageInfo!
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  id: ID
  test: TestCreateOneInput!
  grade: GradeCreateOneInput!
}

input LogCreateManyInput {
  create: [LogCreateInput!]
  connect: [LogWhereUniqueInput!]
}

type LogEdge {
  node: Log!
  cursor: String!
}

enum LogOrderByInput {
  id_ASC
  id_DESC
}

type LogPreviousValues {
  id: ID!
}

input LogScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LogScalarWhereInput!]
  OR: [LogScalarWhereInput!]
  NOT: [LogScalarWhereInput!]
}

type LogSubscriptionPayload {
  mutation: MutationType!
  node: Log
  updatedFields: [String!]
  previousValues: LogPreviousValues
}

input LogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LogWhereInput
  AND: [LogSubscriptionWhereInput!]
  OR: [LogSubscriptionWhereInput!]
  NOT: [LogSubscriptionWhereInput!]
}

input LogUpdateDataInput {
  test: TestUpdateOneRequiredInput
  grade: GradeUpdateOneRequiredInput
}

input LogUpdateInput {
  test: TestUpdateOneRequiredInput
  grade: GradeUpdateOneRequiredInput
}

input LogUpdateManyInput {
  create: [LogCreateInput!]
  update: [LogUpdateWithWhereUniqueNestedInput!]
  upsert: [LogUpsertWithWhereUniqueNestedInput!]
  delete: [LogWhereUniqueInput!]
  connect: [LogWhereUniqueInput!]
  set: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  deleteMany: [LogScalarWhereInput!]
}

input LogUpdateWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput!
  data: LogUpdateDataInput!
}

input LogUpsertWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput!
  update: LogUpdateDataInput!
  create: LogCreateInput!
}

input LogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  test: TestWhereInput
  grade: GradeWhereInput
  AND: [LogWhereInput!]
  OR: [LogWhereInput!]
  NOT: [LogWhereInput!]
}

input LogWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAnswer(data: AnswerCreateInput!): Answer!
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  updateManyAnswers(data: AnswerUpdateManyMutationInput!, where: AnswerWhereInput): BatchPayload!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  deleteManyAnswers(where: AnswerWhereInput): BatchPayload!
  createAnswerSheet(data: AnswerSheetCreateInput!): AnswerSheet!
  updateAnswerSheet(data: AnswerSheetUpdateInput!, where: AnswerSheetWhereUniqueInput!): AnswerSheet
  updateManyAnswerSheets(data: AnswerSheetUpdateManyMutationInput!, where: AnswerSheetWhereInput): BatchPayload!
  upsertAnswerSheet(where: AnswerSheetWhereUniqueInput!, create: AnswerSheetCreateInput!, update: AnswerSheetUpdateInput!): AnswerSheet!
  deleteAnswerSheet(where: AnswerSheetWhereUniqueInput!): AnswerSheet
  deleteManyAnswerSheets(where: AnswerSheetWhereInput): BatchPayload!
  createGrade(data: GradeCreateInput!): Grade!
  updateGrade(data: GradeUpdateInput!, where: GradeWhereUniqueInput!): Grade
  updateManyGrades(data: GradeUpdateManyMutationInput!, where: GradeWhereInput): BatchPayload!
  upsertGrade(where: GradeWhereUniqueInput!, create: GradeCreateInput!, update: GradeUpdateInput!): Grade!
  deleteGrade(where: GradeWhereUniqueInput!): Grade
  deleteManyGrades(where: GradeWhereInput): BatchPayload!
  createLog(data: LogCreateInput!): Log!
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  createTest(data: TestCreateInput!): Test!
  updateTest(data: TestUpdateInput!, where: TestWhereUniqueInput!): Test
  updateManyTests(data: TestUpdateManyMutationInput!, where: TestWhereInput): BatchPayload!
  upsertTest(where: TestWhereUniqueInput!, create: TestCreateInput!, update: TestUpdateInput!): Test!
  deleteTest(where: TestWhereUniqueInput!): Test
  deleteManyTests(where: TestWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  answer(where: AnswerWhereUniqueInput!): Answer
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!
  answerSheet(where: AnswerSheetWhereUniqueInput!): AnswerSheet
  answerSheets(where: AnswerSheetWhereInput, orderBy: AnswerSheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnswerSheet]!
  answerSheetsConnection(where: AnswerSheetWhereInput, orderBy: AnswerSheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerSheetConnection!
  grade(where: GradeWhereUniqueInput!): Grade
  grades(where: GradeWhereInput, orderBy: GradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Grade]!
  gradesConnection(where: GradeWhereInput, orderBy: GradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GradeConnection!
  log(where: LogWhereUniqueInput!): Log
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  test(where: TestWhereUniqueInput!): Test
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test]!
  testsConnection(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
  answerSheet(where: AnswerSheetSubscriptionWhereInput): AnswerSheetSubscriptionPayload
  grade(where: GradeSubscriptionWhereInput): GradeSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  test(where: TestSubscriptionWhereInput): TestSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Test {
  id: ID!
  createdAt: DateTime!
  type: String!
  description: String!
  answerSheet(where: AnswerSheetWhereInput, orderBy: AnswerSheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnswerSheet!]
}

type TestConnection {
  pageInfo: PageInfo!
  edges: [TestEdge]!
  aggregate: AggregateTest!
}

input TestCreateInput {
  id: ID
  type: String!
  description: String!
  answerSheet: AnswerSheetCreateManyInput
}

input TestCreateOneInput {
  create: TestCreateInput
  connect: TestWhereUniqueInput
}

type TestEdge {
  node: Test!
  cursor: String!
}

enum TestOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  description_ASC
  description_DESC
}

type TestPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: String!
  description: String!
}

type TestSubscriptionPayload {
  mutation: MutationType!
  node: Test
  updatedFields: [String!]
  previousValues: TestPreviousValues
}

input TestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestWhereInput
  AND: [TestSubscriptionWhereInput!]
  OR: [TestSubscriptionWhereInput!]
  NOT: [TestSubscriptionWhereInput!]
}

input TestUpdateDataInput {
  type: String
  description: String
  answerSheet: AnswerSheetUpdateManyInput
}

input TestUpdateInput {
  type: String
  description: String
  answerSheet: AnswerSheetUpdateManyInput
}

input TestUpdateManyMutationInput {
  type: String
  description: String
}

input TestUpdateOneRequiredInput {
  create: TestCreateInput
  update: TestUpdateDataInput
  upsert: TestUpsertNestedInput
  connect: TestWhereUniqueInput
}

input TestUpsertNestedInput {
  update: TestUpdateDataInput!
  create: TestCreateInput!
}

input TestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  answerSheet_every: AnswerSheetWhereInput
  answerSheet_some: AnswerSheetWhereInput
  answerSheet_none: AnswerSheetWhereInput
  AND: [TestWhereInput!]
  OR: [TestWhereInput!]
  NOT: [TestWhereInput!]
}

input TestWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  auth: String!
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  auth: String!
  logs: LogCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  auth_ASC
  auth_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  auth: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  auth: String
  logs: LogUpdateManyInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  auth: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  auth: String
  auth_not: String
  auth_in: [String!]
  auth_not_in: [String!]
  auth_lt: String
  auth_lte: String
  auth_gt: String
  auth_gte: String
  auth_contains: String
  auth_not_contains: String
  auth_starts_with: String
  auth_not_starts_with: String
  auth_ends_with: String
  auth_not_ends_with: String
  logs_every: LogWhereInput
  logs_some: LogWhereInput
  logs_none: LogWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    