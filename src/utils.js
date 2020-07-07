import jwt from "jsonwebtoken";
export const APP_SECRET = "GraphQL-is-aw3some";

export const getUserType = (context) => {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userType } = jwt.verify(token, APP_SECRET);
    return userType;
  }
  return null;
};

export const getTestAnswerSheet = (answerSheet, testName) => {
  const testAnswerSheet = {
    create: answerSheet.map(sheet => {
      return {
        testName,
        name: sheet.name,
        answers: {
          create: sheet.answers.map(answer => {
            return {
              testName,
              number: answer.number,
              answer: answer.answer
            }
          })
        }
      }
    })
  }
  return testAnswerSheet
}


export const getGrade = (testAnswer, omrAnswer, logName) => {
  const gradeInfo = {
    create: []
  };
  let totalScore = 0;
  for(var i=0; i<testAnswer.length; i++){
    const scores = []
    let sumScore = 0;
    for(var j=0; j<testAnswer[i].answers.length; j++){
      if (testAnswer[i].answers[j].answer === omrAnswer[i].answers[j].answer) {
        totalScore += 1;
        sumScore += 1;
        scores.push({
          logName,
          number: testAnswer[i].answers[j].number,
          ox: "O"
        })
      } else {
        scores.push({
          logName,
          number: testAnswer[i].answers[j].number,
          ox: "X"
        })
      }
    }
    gradeInfo.create.push({
      logName,
      name: testAnswer[i].name,
      sumScore,
      scores: {
        create: scores
      }
    })
  }
  return { totalScore, gradeInfo };
}

export function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 15;
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  //document.randform.randomfield.value = randomstring;
  return randomstring;
}