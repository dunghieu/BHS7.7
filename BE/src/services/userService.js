import User from "../models/user";

const createUser = async (userData) => {
  const { email, password } = userData;
  let isExist = await User.findOne({ email });
  if (isExist) {
    throw "User already exist";
  }
  return User.create({ email, password });
};

module.exports = {
  createUser,
};
