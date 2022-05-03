const mongoose = require ('mongoose');
// const Joi = require ('joi');

const projectSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 250,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ModifiedAt: {
    type: Date,
    default: null,
  },
});

const Project = mongoose.model ('Project', projectSchema);

//   function validateProjectInputs (user) {
//     const schema = Joi.object ({
//       email: Joi.string ().email ().required (),
//       password: Joi.string ()
//         .min (6)
//         .regex (/^(?=.*[!@#\$%\^&\*])(?=.{6,})/)
//         .required ()
//         .messages ({
//           'string.pattern.base': 'must have length 6 and one special character',
//         }),
//     });

//     return schema.validate (user, {abortEarly: false});
//   }

module.exports.Project = Project;
//module.exports.validate = validateProjectInputs;
