const newLogSubscribe = (parent, args, context, info) => {
  return context.prisma.$subscribe.log({ mutation_in: ["CREATED"] }).node();
};
const newLog = {
  subscribe: newLogSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

module.exports = {
  newLog,
};
