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

module.exports = {
  createTest,
};
