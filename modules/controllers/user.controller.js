const User = require('../../db/models/users/index')

module.exports.LogIn = async (req, res, next) => {
  console.log('req.body', req.body);
  const { login, password } = req.body;
  const checkingUser = await User.findOne({ login, password });
    if(checkingUser){
      res.send(checkingUser);
    } else {
      return res.status(404).send({ error:"Sorry but login or password is`not exist" })
    }
}
  

  module.exports.createUser = async (req, res, next) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res.status(401).send({ error: "User is already created" });
      }
      
      const user = new User({ login, password} );
      await user.save().then((result) => {
        res.send( {data: result} );
      });
    } catch (e) {
      res.send( {message: "Server error"} );
    }
  };
  
module.exports.allUsers = async (req, res, next) => {
  User.find().then((result) => {
    res.send(result);
  });
};