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

export const getGrade = (testAnswer, omrAnswer) => {
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
          number: testAnswer[i].answers[j].number,
          ox: "O"
        })
      } else {
        scores.push({
          number: testAnswer[i].answers[j].number,
          ox: "X"
        })
      }
    }
    gradeInfo.create.push({
      name: testAnswer[i].name,
      sumScore,
      scores: {
        create: scores
      }
    })
  }
  return { totalScore, gradeInfo };
}