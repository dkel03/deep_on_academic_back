const LogSubscribe = (parent, args, context, info) => {
  return context.prisma.$subscribe.log({ mutation_in: ["CREATED", "DELETED"] }).node();
};
const logSubscription = {
  subscribe: LogSubscribe,
  resolve: (payload) => {
    if(!payload) {
      return {
        state: "deleted"
      }
    }
    return {
      state: "created",
      log: payload
    };
  },
};

module.exports = {
  logSubscription,
};
