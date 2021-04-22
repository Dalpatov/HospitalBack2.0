const Tabs = require('../../db/models/users/tabs');

module.exports.allTabs = async (req, res, next) => {
  Tabs.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createTabs = async (req, res, next) => {
 const tabs = new Tabs(req.body);
    tabs.save().then(result => {
      Tabs.find().then(result => {
        res.send(result);
      }).catch(err => res.status(404).send({error: "unable to create new table"}))
    });
}