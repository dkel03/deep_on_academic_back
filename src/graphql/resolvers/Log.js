const user = (parent, args, context, info) => {
  return context.prisma.log({ id: parent.id }).user()
}
const test = (parent, args, context, info) => {
  return context.prisma.log({ id: parent.id }).test()
}
const answerSheet = (parent, args, context, info) => {
  return context.prisma.log({ id: parent.id }).answerSheet()
}

module.exports = {
  user,
  test,
  answerSheet,
}