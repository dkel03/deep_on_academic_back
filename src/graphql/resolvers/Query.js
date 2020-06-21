const test = async (parent, args, context, info) => {
  return context.prisma.test({ id: args.id });
}

const tests = async (parent, args, context, info) => {
  return context.prisma.tests();
};

module.exports = {
  test,
  tests,
};
