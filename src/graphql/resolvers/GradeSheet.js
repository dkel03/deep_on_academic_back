const scores = (parent, args, context, info) => {
  return context.prisma.gradeSheet({ id: parent.id }).scores()
}

module.exports = {
  scores,
}