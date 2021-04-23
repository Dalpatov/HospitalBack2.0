const express = require('express');
const router = express.Router()

const{
  allUsers,
  createUser,
  LogIn
} = require('../controllers/user.controller');

//User routs
router.get('/allUsers',allUsers);
router.post('/createUser',createUser);
router.post('/LogIn',LogIn);

const{
  allTabs,
  createTabs,
  deleteTabs,
  patchTabs
} = require('../controllers/tabs.controller');

//Tabs routs
router.get('/allTabs', allTabs);
router.post('/createTabs', createTabs);
router.delete('/deleteTabs', deleteTabs);
router.patch('/patchTabs', patchTabs);

module.exports = router;