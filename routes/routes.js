const express = require('express');
const postcontrl = require('../controller/postController');
const route = express.Router();

const contrl = require('../controller/userController');

route.get('/', postcontrl.getStartPage);
route.get('/loginPage', contrl.getLoginPage)
route.post('/login', contrl.postLoginPage)

route.get('/signupPage', contrl.getSignPage)
route.post('/signup',contrl.getSignUpFunction)
route.get('/logout',contrl.getLogOutFunction)

route.get('/questionPage', contrl.getQuestionPage)
route.post('/addNewQuestion', postcontrl.addNewQuestion)
route.get("/edit-post",postcontrl.getEditpage)
route.post("/edit-post/:id",postcontrl.postEdited)

route.get("/delete-post/:id",postcontrl.deleteQuestion)


module.exports = route;