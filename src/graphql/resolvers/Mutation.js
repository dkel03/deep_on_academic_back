import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { APP_SECRET, getScore } from "../../utils";

const createTest = (parent, args, context, info) => {
  const answerSheet = {
    create: args.answerSheet.map(sheet => {
      return {
        name: sheet.name,
        answers: {
          create: sheet.answers.map(answer => {
            return {
              number: answer.number,
              answer: answer.answer
            }
          })
        }
      }
    })
  }
  return context.prisma.createTest({
    type: args.type,
    description: args.description,
    answerSheet
  });
};

const createLog = async (parent, args, context, info) => {
  const fragment = `
    fragment TestWithAnswerSheet on Test {
      answerSheet {
        name
        answers {
          number
          answer
        }
      }
    }
  `
  const { answerSheet } = await context.prisma.test( {id: args.testId }).$fragment(fragment);
  const score = await getScore(answerSheet, args.answerSheet);
  const OmrAnswerSheet = {
    create: args.answerSheet.map(sheet => {
      return {
        name: sheet.name,
        answers: {
          create: sheet.answers.map(answer => {
            return {
              number: answer.number,
              answer: answer.answer
            }
          })
        }
      }
    })
  };
  const log = await context.prisma.createLog({
    user: {connect: { id: args.userId }},
    test: {connect: { id: args.testId }},
    answerSheet: OmrAnswerSheet,
    score
  })
  return log;
};

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
  createLog,
  signup,
  login,
};
