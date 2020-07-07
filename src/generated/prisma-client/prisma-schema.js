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

type AggregateGradeSheet {
  count: Int!
}

type AggregateLog {
  count: Int!
}

type AggregateScore {
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
  testName: String
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
  testName: String
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
  testName_ASC
  testName_DESC
  number_ASC
  number_DESC
  answer_ASC
  answer_DESC
}

type AnswerPreviousValues {
  id: ID!
  testName: String
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
  testName: String
  testName_not: String
  testName_in: [String!]
  testName_not_in: [String!]
  testName_lt: String
  testName_lte: String
  testName_gt: String
  testName_gte: String
  testName_contains: String
  testName_not_contains: String
  testName_starts_with: String
  testName_not_starts_with: String
  testName_ends_with: String
  testName_not_ends_with: String
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
  testName: String
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
  testName: String
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
  testName_ASC
  testName_DESC
  name_ASC
  name_DESC
}

type AnswerSheetPreviousValues {
  id: ID!
  testName: String
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
  testName: String
  testName_not: String
  testName_in: [String!]
  testName_not_in: [String!]
  testName_lt: String
  testName_lte: String
  testName_gt: String
  testName_gte: String
  testName_contains: String
  testName_not_contains: String
  testName_starts_with: String
  testName_not_starts_with: String
  testName_ends_with: String
  testName_not_ends_with: String
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
  testName: String
  name: String
  answers: AnswerUpdateManyInput
}

input AnswerSheetUpdateInput {
  testName: String
  name: String
  answers: AnswerUpdateManyInput
}

input AnswerSheetUpdateManyDataInput {
  testName: String
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
  testName: String
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
  testName: String
  testName_not: String
  testName_in: [String!]
  testName_not_in: [String!]
  testName_lt: String
  testName_lte: String
  testName_gt: String
  testName_gte: String
  testName_contains: String
  testName_not_contains: String
  testName_starts_with: String
  testName_not_starts_with: String
  testName_ends_with: String
  testName_not_ends_with: String
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
  testName: String
  number: Int
  answer: String
}

input AnswerUpdateInput {
  testName: String
  number: Int
  answer: String
}

input AnswerUpdateManyDataInput {
  testName: String
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
  testName: String
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
  testName: String
  testName_not: String
  testName_in: [String!]
  testName_not_in: [String!]
  testName_lt: String
  testName_lte: String
  testName_gt: String
  testName_gte: String
  testName_contains: String
  testName_not_contains: String
  testName_starts_with: String
  testName_not_starts_with: String
  testName_ends_with: String
  testName_not_ends_with: String
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

type GradeSheet {
  id: ID!
  logName: String
  name: String!
  sumScore: Int!
  scores(where: ScoreWhereInput, orderBy: ScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Score!]
}

type GradeSheetConnection {
  pageInfo: PageInfo!
  edges: [GradeSheetEdge]!
  aggregate: AggregateGradeSheet!
}

input GradeSheetCreateInput {
  id: ID
  logName: String
  name: String!
  sumScore: Int!
  scores: ScoreCreateManyInput
}

input GradeSheetCreateManyInput {
  create: [GradeSheetCreateInput!]
  connect: [GradeSheetWhereUniqueInput!]
}

type GradeSheetEdge {
  node: GradeSheet!
  cursor: String!
}

enum GradeSheetOrderByInput {
  id_ASC
  id_DESC
  logName_ASC
  logName_DESC
  name_ASC
  name_DESC
  sumScore_ASC
  sumScore_DESC
}

type GradeSheetPreviousValues {
  id: ID!
  logName: String
  name: String!
  sumScore: Int!
}

input GradeSheetScalarWhereInput {
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
  logName: String
  logName_not: String
  logName_in: [String!]
  logName_not_in: [String!]
  logName_lt: String
  logName_lte: String
  logName_gt: String
  logName_gte: String
  logName_contains: String
  logName_not_contains: String
  logName_starts_with: String
  logName_not_starts_with: String
  logName_ends_with: String
  logName_not_ends_with: String
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
  sumScore: Int
  sumScore_not: Int
  sumScore_in: [Int!]
  sumScore_not_in: [Int!]
  sumScore_lt: Int
  sumScore_lte: Int
  sumScore_gt: Int
  sumScore_gte: Int
  AND: [GradeSheetScalarWhereInput!]
  OR: [GradeSheetScalarWhereInput!]
  NOT: [GradeSheetScalarWhereInput!]
}

type GradeSheetSubscriptionPayload {
  mutation: MutationType!
  node: GradeSheet
  updatedFields: [String!]
  previousValues: GradeSheetPreviousValues
}

input GradeSheetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GradeSheetWhereInput
  AND: [GradeSheetSubscriptionWhereInput!]
  OR: [GradeSheetSubscriptionWhereInput!]
  NOT: [GradeSheetSubscriptionWhereInput!]
}

input GradeSheetUpdateDataInput {
  logName: String
  name: String
  sumScore: Int
  scores: ScoreUpdateManyInput
}

input GradeSheetUpdateInput {
  logName: String
  name: String
  sumScore: Int
  scores: ScoreUpdateManyInput
}

input GradeSheetUpdateManyDataInput {
  logName: String
  name: String
  sumScore: Int
}

input GradeSheetUpdateManyInput {
  create: [GradeSheetCreateInput!]
  update: [GradeSheetUpdateWithWhereUniqueNestedInput!]
  upsert: [GradeSheetUpsertWithWhereUniqueNestedInput!]
  delete: [GradeSheetWhereUniqueInput!]
  connect: [GradeSheetWhereUniqueInput!]
  set: [GradeSheetWhereUniqueInput!]
  disconnect: [GradeSheetWhereUniqueInput!]
  deleteMany: [GradeSheetScalarWhereInput!]
  updateMany: [GradeSheetUpdateManyWithWhereNestedInput!]
}

input GradeSheetUpdateManyMutationInput {
  logName: String
  name: String
  sumScore: Int
}

input GradeSheetUpdateManyWithWhereNestedInput {
  where: GradeSheetScalarWhereInput!
  data: GradeSheetUpdateManyDataInput!
}

input GradeSheetUpdateWithWhereUniqueNestedInput {
  where: GradeSheetWhereUniqueInput!
  data: GradeSheetUpdateDataInput!
}

input GradeSheetUpsertWithWhereUniqueNestedInput {
  where: GradeSheetWhereUniqueInput!
  update: GradeSheetUpdateDataInput!
  create: GradeSheetCreateInput!
}

input GradeSheetWhereInput {
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
  logName: String
  logName_not: String
  logName_in: [String!]
  logName_not_in: [String!]
  logName_lt: String
  logName_lte: String
  logName_gt: String
  logName_gte: String
  logName_contains: String
  logName_not_contains: String
  logName_starts_with: String
  logName_not_starts_with: String
  logName_ends_with: String
  logName_not_ends_with: String
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
  sumScore: Int
  sumScore_not: Int
  sumScore_in: [Int!]
  sumScore_not_in: [Int!]
  sumScore_lt: Int
  sumScore_lte: Int
  sumScore_gt: Int
  sumScore_gte: Int
  scores_every: ScoreWhereInput
  scores_some: ScoreWhereInput
  scores_none: ScoreWhereInput
  AND: [GradeSheetWhereInput!]
  OR: [GradeSheetWhereInput!]
  NOT: [GradeSheetWhereInput!]
}

input GradeSheetWhereUniqueInput {
  id: ID
}

type Log {
  id: ID!
  createdAt: DateTime
  logName: String!
  user: User
  test: Test
  totalScore: Int!
  gradeInfo(where: GradeSheetWhereInput, orderBy: GradeSheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GradeSheet!]
}

type LogConnection {
  pageInfo: PageInfo!
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  id: ID
  logName: String!
  user: UserCreateOneWithoutLogsInput
  test: TestCreateOneInput
  totalScore: Int!
  gradeInfo: GradeSheetCreateManyInput
}

input LogCreateManyWithoutUserInput {
  create: [LogCreateWithoutUserInput!]
  connect: [LogWhereUniqueInput!]
}

input LogCreateWithoutUserInput {
  id: ID
  logName: String!
  test: TestCreateOneInput
  totalScore: Int!
  gradeInfo: GradeSheetCreateManyInput
}

type LogEdge {
  node: Log!
  cursor: String!
}

enum LogOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  logName_ASC
  logName_DESC
  totalScore_ASC
  totalScore_DESC
}

type LogPreviousValues {
  id: ID!
  createdAt: DateTime
  logName: String!
  totalScore: Int!
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  logName: String
  logName_not: String
  logName_in: [String!]
  logName_not_in: [String!]
  logName_lt: String
  logName_lte: String
  logName_gt: String
  logName_gte: String
  logName_contains: String
  logName_not_contains: String
  logName_starts_with: String
  logName_not_starts_with: String
  logName_ends_with: String
  logName_not_ends_with: String
  totalScore: Int
  totalScore_not: Int
  totalScore_in: [Int!]
  totalScore_not_in: [Int!]
  totalScore_lt: Int
  totalScore_lte: Int
  totalScore_gt: Int
  totalScore_gte: Int
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

input LogUpdateInput {
  logName: String
  user: UserUpdateOneWithoutLogsInput
  test: TestUpdateOneInput
  totalScore: Int
  gradeInfo: GradeSheetUpdateManyInput
}

input LogUpdateManyDataInput {
  logName: String
  totalScore: Int
}

input LogUpdateManyMutationInput {
  logName: String
  totalScore: Int
}

input LogUpdateManyWithoutUserInput {
  create: [LogCreateWithoutUserInput!]
  delete: [LogWhereUniqueInput!]
  connect: [LogWhereUniqueInput!]
  set: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  update: [LogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LogUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [LogScalarWhereInput!]
  updateMany: [LogUpdateManyWithWhereNestedInput!]
}

input LogUpdateManyWithWhereNestedInput {
  where: LogScalarWhereInput!
  data: LogUpdateManyDataInput!
}

input LogUpdateWithoutUserDataInput {
  logName: String
  test: TestUpdateOneInput
  totalScore: Int
  gradeInfo: GradeSheetUpdateManyInput
}

input LogUpdateWithWhereUniqueWithoutUserInput {
  where: LogWhereUniqueInput!
  data: LogUpdateWithoutUserDataInput!
}

input LogUpsertWithWhereUniqueWithoutUserInput {
  where: LogWhereUniqueInput!
  update: LogUpdateWithoutUserDataInput!
  create: LogCreateWithoutUserInput!
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  logName: String
  logName_not: String
  logName_in: [String!]
  logName_not_in: [String!]
  logName_lt: String
  logName_lte: String
  logName_gt: String
  logName_gte: String
  logName_contains: String
  logName_not_contains: String
  logName_starts_with: String
  logName_not_starts_with: String
  logName_ends_with: String
  logName_not_ends_with: String
  user: UserWhereInput
  test: TestWhereInput
  totalScore: Int
  totalScore_not: Int
  totalScore_in: [Int!]
  totalScore_not_in: [Int!]
  totalScore_lt: Int
  totalScore_lte: Int
  totalScore_gt: Int
  totalScore_gte: Int
  gradeInfo_every: GradeSheetWhereInput
  gradeInfo_some: GradeSheetWhereInput
  gradeInfo_none: GradeSheetWhereInput
  AND: [LogWhereInput!]
  OR: [LogWhereInput!]
  NOT: [LogWhereInput!]
}

input LogWhereUniqueInput {
  id: ID
  logName: String
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
  createGradeSheet(data: GradeSheetCreateInput!): GradeSheet!
  updateGradeSheet(data: GradeSheetUpdateInput!, where: GradeSheetWhereUniqueInput!): GradeSheet
  updateManyGradeSheets(data: GradeSheetUpdateManyMutationInput!, where: GradeSheetWhereInput): BatchPayload!
  upsertGradeSheet(where: GradeSheetWhereUniqueInput!, create: GradeSheetCreateInput!, update: GradeSheetUpdateInput!): GradeSheet!
  deleteGradeSheet(where: GradeSheetWhereUniqueInput!): GradeSheet
  deleteManyGradeSheets(where: GradeSheetWhereInput): BatchPayload!
  createLog(data: LogCreateInput!): Log!
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateManyLogs(data: LogUpdateManyMutationInput!, where: LogWhereInput): BatchPayload!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  createScore(data: ScoreCreateInput!): Score!
  updateScore(data: ScoreUpdateInput!, where: ScoreWhereUniqueInput!): Score
  updateManyScores(data: ScoreUpdateManyMutationInput!, where: ScoreWhereInput): BatchPayload!
  upsertScore(where: ScoreWhereUniqueInput!, create: ScoreCreateInput!, update: ScoreUpdateInput!): Score!
  deleteScore(where: ScoreWhereUniqueInput!): Score
  deleteManyScores(where: ScoreWhereInput): BatchPayload!
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
  gradeSheet(where: GradeSheetWhereUniqueInput!): GradeSheet
  gradeSheets(where: GradeSheetWhereInput, orderBy: GradeSheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GradeSheet]!
  gradeSheetsConnection(where: GradeSheetWhereInput, orderBy: GradeSheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GradeSheetConnection!
  log(where: LogWhereUniqueInput!): Log
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  score(where: ScoreWhereUniqueInput!): Score
  scores(where: ScoreWhereInput, orderBy: ScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Score]!
  scoresConnection(where: ScoreWhereInput, orderBy: ScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScoreConnection!
  test(where: TestWhereUniqueInput!): Test
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test]!
  testsConnection(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Score {
  id: ID!
  logName: String
  number: Int!
  ox: String!
}

type ScoreConnection {
  pageInfo: PageInfo!
  edges: [ScoreEdge]!
  aggregate: AggregateScore!
}

input ScoreCreateInput {
  id: ID
  logName: String
  number: Int!
  ox: String!
}

input ScoreCreateManyInput {
  create: [ScoreCreateInput!]
  connect: [ScoreWhereUniqueInput!]
}

type ScoreEdge {
  node: Score!
  cursor: String!
}

enum ScoreOrderByInput {
  id_ASC
  id_DESC
  logName_ASC
  logName_DESC
  number_ASC
  number_DESC
  ox_ASC
  ox_DESC
}

type ScorePreviousValues {
  id: ID!
  logName: String
  number: Int!
  ox: String!
}

input ScoreScalarWhereInput {
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
  logName: String
  logName_not: String
  logName_in: [String!]
  logName_not_in: [String!]
  logName_lt: String
  logName_lte: String
  logName_gt: String
  logName_gte: String
  logName_contains: String
  logName_not_contains: String
  logName_starts_with: String
  logName_not_starts_with: String
  logName_ends_with: String
  logName_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  ox: String
  ox_not: String
  ox_in: [String!]
  ox_not_in: [String!]
  ox_lt: String
  ox_lte: String
  ox_gt: String
  ox_gte: String
  ox_contains: String
  ox_not_contains: String
  ox_starts_with: String
  ox_not_starts_with: String
  ox_ends_with: String
  ox_not_ends_with: String
  AND: [ScoreScalarWhereInput!]
  OR: [ScoreScalarWhereInput!]
  NOT: [ScoreScalarWhereInput!]
}

type ScoreSubscriptionPayload {
  mutation: MutationType!
  node: Score
  updatedFields: [String!]
  previousValues: ScorePreviousValues
}

input ScoreSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ScoreWhereInput
  AND: [ScoreSubscriptionWhereInput!]
  OR: [ScoreSubscriptionWhereInput!]
  NOT: [ScoreSubscriptionWhereInput!]
}

input ScoreUpdateDataInput {
  logName: String
  number: Int
  ox: String
}

input ScoreUpdateInput {
  logName: String
  number: Int
  ox: String
}

input ScoreUpdateManyDataInput {
  logName: String
  number: Int
  ox: String
}

input ScoreUpdateManyInput {
  create: [ScoreCreateInput!]
  update: [ScoreUpdateWithWhereUniqueNestedInput!]
  upsert: [ScoreUpsertWithWhereUniqueNestedInput!]
  delete: [ScoreWhereUniqueInput!]
  connect: [ScoreWhereUniqueInput!]
  set: [ScoreWhereUniqueInput!]
  disconnect: [ScoreWhereUniqueInput!]
  deleteMany: [ScoreScalarWhereInput!]
  updateMany: [ScoreUpdateManyWithWhereNestedInput!]
}

input ScoreUpdateManyMutationInput {
  logName: String
  number: Int
  ox: String
}

input ScoreUpdateManyWithWhereNestedInput {
  where: ScoreScalarWhereInput!
  data: ScoreUpdateManyDataInput!
}

input ScoreUpdateWithWhereUniqueNestedInput {
  where: ScoreWhereUniqueInput!
  data: ScoreUpdateDataInput!
}

input ScoreUpsertWithWhereUniqueNestedInput {
  where: ScoreWhereUniqueInput!
  update: ScoreUpdateDataInput!
  create: ScoreCreateInput!
}

input ScoreWhereInput {
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
  logName: String
  logName_not: String
  logName_in: [String!]
  logName_not_in: [String!]
  logName_lt: String
  logName_lte: String
  logName_gt: String
  logName_gte: String
  logName_contains: String
  logName_not_contains: String
  logName_starts_with: String
  logName_not_starts_with: String
  logName_ends_with: String
  logName_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  ox: String
  ox_not: String
  ox_in: [String!]
  ox_not_in: [String!]
  ox_lt: String
  ox_lte: String
  ox_gt: String
  ox_gte: String
  ox_contains: String
  ox_not_contains: String
  ox_starts_with: String
  ox_not_starts_with: String
  ox_ends_with: String
  ox_not_ends_with: String
  AND: [ScoreWhereInput!]
  OR: [ScoreWhereInput!]
  NOT: [ScoreWhereInput!]
}

input ScoreWhereUniqueInput {
  id: ID
}

type Subscription {
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
  answerSheet(where: AnswerSheetSubscriptionWhereInput): AnswerSheetSubscriptionPayload
  gradeSheet(where: GradeSheetSubscriptionWhereInput): GradeSheetSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  score(where: ScoreSubscriptionWhereInput): ScoreSubscriptionPayload
  test(where: TestSubscriptionWhereInput): TestSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Test {
  id: ID!
  createdAt: DateTime!
  testName: String!
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
  testName: String!
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
  testName_ASC
  testName_DESC
  type_ASC
  type_DESC
  description_ASC
  description_DESC
}

type TestPreviousValues {
  id: ID!
  createdAt: DateTime!
  testName: String!
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
  testName: String
  type: String
  description: String
  answerSheet: AnswerSheetUpdateManyInput
}

input TestUpdateInput {
  testName: String
  type: String
  description: String
  answerSheet: AnswerSheetUpdateManyInput
}

input TestUpdateManyMutationInput {
  testName: String
  type: String
  description: String
}

input TestUpdateOneInput {
  create: TestCreateInput
  update: TestUpdateDataInput
  upsert: TestUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
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
  testName: String
  testName_not: String
  testName_in: [String!]
  testName_not_in: [String!]
  testName_lt: String
  testName_lte: String
  testName_gt: String
  testName_gte: String
  testName_contains: String
  testName_not_contains: String
  testName_starts_with: String
  testName_not_starts_with: String
  testName_ends_with: String
  testName_not_ends_with: String
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
  testName: String
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  userType: String
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
  userType: String
  logs: LogCreateManyWithoutUserInput
}

input UserCreateOneWithoutLogsInput {
  create: UserCreateWithoutLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLogsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  userType: String
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
  userType_ASC
  userType_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  userType: String
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
  userType: String
  logs: LogUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  userType: String
}

input UserUpdateOneWithoutLogsInput {
  create: UserCreateWithoutLogsInput
  update: UserUpdateWithoutLogsDataInput
  upsert: UserUpsertWithoutLogsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLogsDataInput {
  name: String
  email: String
  password: String
  userType: String
}

input UserUpsertWithoutLogsInput {
  update: UserUpdateWithoutLogsDataInput!
  create: UserCreateWithoutLogsInput!
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
  userType: String
  userType_not: String
  userType_in: [String!]
  userType_not_in: [String!]
  userType_lt: String
  userType_lte: String
  userType_gt: String
  userType_gte: String
  userType_contains: String
  userType_not_contains: String
  userType_starts_with: String
  userType_not_starts_with: String
  userType_ends_with: String
  userType_not_ends_with: String
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
    