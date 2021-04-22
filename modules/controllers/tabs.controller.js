const Tabs = require('../../db/models/users/tabs');

module.exports.allTabs = async (req, res, next) => {
  Tabs.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createTabs = async (req, res, next) => {
 const tabs = new Tabs(req.body);
    tabs.save().then(result => {
      res.send(result);
    }).catch(err => res.status(404).send({error: "unable to create new table"}));
}

module.exports.patchTabs = (req, res, next) => {
  Tabs.updateOne({_id: req.body._id}, req.body).then(result => {
    Tabs.find().then(result => {
      res.send(result);
  }).catch(err => res.status(404).send({error: "The change to the table was not successful"}))    
});
};

module.exports.deleteTask = (req, res) => {
  Task.deleteOne({_id: req.query._id}).then(result => {
    Task.find().then(result => {
      res.send({data:result});
    })  
  });
};