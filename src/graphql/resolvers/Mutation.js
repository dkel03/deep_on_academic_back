import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "../../utils";

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
  signup,
  login,
};
