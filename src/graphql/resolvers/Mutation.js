import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { APP_SECRET, getTestAnswerSheet, getGrade, randomString } from "../../utils";

const createTest = async (parent, args, context, info) => {
  const testName = `${args.description}-${randomString()}`
  const answerSheet = await getTestAnswerSheet(args.answerSheet, testName)
  const test = await context.prisma.createTest({
    testName,
    type: args.type,
    description: args.description,
    answerSheet
  });
  return test;
};

const deleteTest = async (parent, args, context, info) => {
  let status = "success"
  const test = await context.prisma.deleteTest({testName: args.testName})
  const answerSheets = await context.prisma.deleteManyAnswerSheets({testName: args.testName})
  const answer = await context.prisma.deleteManyAnswers({testName: args.testName});
  return status
}

const createLog = async (parent, args, context, info) => {
  const fragment = `
    fragment TestWithAnswerSheet on Test {
      description
      answerSheet {
        name
        answers {
          number
          answer
        }
      }
    }
  `
  const { description, answerSheet } = await context.prisma.test( {id: args.testId }).$fragment(fragment);
  const logName = `${description}-${randomString()}` 
  const { totalScore, gradeInfo } = await getGrade(answerSheet, args.answerSheet, logName);
  const log = await context.prisma.createLog({
    logName,
    user: {connect: { id: args.userId }},
    test: {connect: { id: args.testId }},
    totalScore,
    gradeInfo
  })
  return log;
};

const deleteLog = async (parent, args, context, info) => {
  let status = "success"
  const log = await context.prisma.deleteLog({logName: args.logName})
  const gradeSheets = await context.prisma.deleteManyGradeSheets({logName: args.logName})
  const scores = await context.prisma.deleteManyScores({logName: args.logName});
  return status
}

const signup = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id, userType: user.userType }, APP_SECRET);
  return {
    token,
    user,
  };
};

const login = async (parent, args, context, info) => {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign({ userId: user.id, userType: user.userType }, APP_SECRET);
  return {
    token,
    user,
  };
};

module.exports = {
  createTest,
  deleteTest,
  createLog,
  deleteLog,
  signup,
  login,
};
