const User = require('../../db/models/users/index')

module.exports.LogIn = async (req, res, next) => {
  const isLog = new User(req.body);
  const checkLogin = isLog.login;
  const checkPassword = isLog.password;
  const checkingUser = await User.findOne({login: checkLogin, password: checkPassword});
    if(checkingUser){
      isLog.save().then(result => {
      res.send(result);
      });
    } else {
      return res.status(404).send({error:"Sorry but login or password is`not exist"})
    }
}
  

  module.exports.createUser = async (req, res, next) => {
    try {
      const {login, password} = req.body;
      const candidate = await User.findOne({login});
      if (candidate) {
        return res.status(400).send({error: "User is already created"});
      }
     
      const user = new User({login, password});
      await user.save().then((result) => {
        res.send({data: result});
      });
    } catch (e) {
      res.send({message: "Server error"});
    }
  };
  
module.exports.allUsers = async (req, res, next) => {
  User.find().then((result) => {
    res.send(result);
  });
};