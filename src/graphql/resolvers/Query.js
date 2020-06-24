import { getUserType } from "../../utils"

const test = async (parent, args, context, info) => {
  return context.prisma.test({ id: args.id });
}
const tests = async (parent, args, context, info) => {
  return context.prisma.tests();
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
  userType,
};
