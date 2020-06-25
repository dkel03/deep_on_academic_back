const user = (parent, args, context) => {
  return context.prisma.authPayload({ id: parent.id }).user()
}

module.exports = {
  user
}