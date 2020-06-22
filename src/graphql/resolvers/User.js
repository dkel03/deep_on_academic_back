const logs = (parent, args, context) => {
  return context.prisma.user({ id: parent.id }).logs()
}

module.exports = {
  logs,
}