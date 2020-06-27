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

export const getScore = (testAnswer, omrAnswer) => {
  let score = 0;
  for(var i=0; i<testAnswer.length; i++){
    for(var j=0; j<testAnswer[i].answers.length; j++){
      if (testAnswer[i].answers[j].answer === omrAnswer[i].answers[j].answer) {
        score += 1;
      }
    }
  }
  return score;
}