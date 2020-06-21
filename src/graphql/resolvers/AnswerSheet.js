const answers = (parent, args, context, info) => {
  return context.prisma.answerSheet({ id: parent.id }).answers()
}

module.exports = {
  answers,
}