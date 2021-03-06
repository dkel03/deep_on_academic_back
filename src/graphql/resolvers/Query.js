import { getUserType } from "../../utils"

const test = async (parent, args, context, info) => {
  return context.prisma.test({ id: args.id });
}

const tests = async (parent, args, context, info) => {
  const where = args.filter
  ? {
      OR: [
        { logName: args.filter },
      ],
    }
  : {};
  return context.prisma.tests({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });
};
const log = async (parent, args, context, info) => {
  return context.prisma.log({ id: args.id });
}
const logs = async (parent, args, context, info) => {
  const where = args.filter
  ? {
      OR: [
        { logName: args.filter },
      ],
    }
  : {};
  return context.prisma.logs({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });
};
const user = async (parent, args, context, info) => {
  return context.prisma.user({ id: args.id });
}
const users = async (parent, args, context, info) => {
  const where = args.filter
  ? {
      OR: [
        { userType: args.filter },
      ],
    }
  : {};
  return context.prisma.users({where});
};
const userType = async (parent, args, context, info) => {
  const userType = getUserType(context);
  if (userType && userType === "student") {
    return "student"
  }
  if (userType && userType === "teacher") {
    return "teacher"
  }
  return null
}

module.exports = {
  test,
  tests,
  log,
  logs,
  user,
  users,
  userType,
};
