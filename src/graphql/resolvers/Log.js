const user = (parent, args, context, info) => {
  return context.prisma.log({ id: parent.id }).user()
}
const test = (parent, args, context, info) => {
  return context.prisma.log({ id: parent.id }).test()
}
const gradeInfo = (parent, args, context, info) => {
  return context.prisma.log({ id: parent.id }).gradeInfo()
}

module.exports = {
  user,
  test,
  gradeInfo,
}