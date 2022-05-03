const {baseUrl} = require("../common/common");

function verify_html(token) {
  return `<p>Hey tManager User,</p><p>Please click below link to verify your email.</p>
    <a href=https://tmanager-backend.vercel.app/verify-email/?token=${token}">${baseUrl}api/users/verify/:${token}</a>. Kindly ignore this email 
    if you didn't signup.`;    
}     
 
module.exports.verify_html = verify_html;
