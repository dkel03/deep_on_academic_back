const answerSheet = (parent, args, context, info) => {
  return context.prisma.test({ id: parent.id }).answerSheet()
}

module.exports = {
  answerSheet,
}