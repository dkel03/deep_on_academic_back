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
