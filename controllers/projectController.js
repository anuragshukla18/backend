// const {User, validate, generateAuthToken} = require ('../models/users');
const _ = require ('lodash');
// const bcrypt = require ('bcrypt');
// const {sendEmail} = require ('../routes/email');
const logger = require ('../libs/loggerLib');
const response = require ('../libs/responseLib');
const {Project} = require ('../models/projects');
// const {jwtr} = require ('../common/common');

exports.create = async function (req, res) {
  console.log ('project create api hit');
  console.log (req.body);
  console.log ('User values');
  console.log (req.user);
  req.body['createdBy'] = req.user._id;
  let project = new Project (_.pick (req.body, ['name', 'description','createdBy']));
  
  await project.save ();
  apiResponse = response.generate (
    false,
    'project created successfully',
    200,
    '',
    req.body
  );
  return res.status (200).send (apiResponse);
};


exports.list = async function (req, res) {

// console.log("here user details ");
// console.log(req.user);

  let projects = await Project.find ({
    createdBy: req.user._id,
  }).select("name");


  if (projects) {
  
    apiResponse = response.generate (
      false,
      '',
      200,
      '',
      projects
    );
    console.log(apiResponse);
    return res.status (200).send (apiResponse);
  }

}