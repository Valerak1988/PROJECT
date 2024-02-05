
//חיבור לספריית JWT
const jwt = require('jsonwebtoken');


const token = jwt.sign({userid:25,email:'222555@gmail.com'},"mytokenkey",{expiresIn:'2h'});
console.log(token);

const processVerify = jwt.verify(token,"mytokenkey");

console.log(processVerify);