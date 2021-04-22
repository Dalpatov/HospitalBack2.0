const Tabs = require('../../db/models/users/tabs');

module.exports.allTabs = async (req, res, next) => {
  const tabs = new Tabs(req.body);
    tabs.save().then(result => {
      Tabs.find().then(result => {
        res.send({data:result});
      });
    });
};

