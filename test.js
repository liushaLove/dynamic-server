const fs = require("fs");

//读数据库
let usersString = fs.readFileSync("./db/users.json").toString();
console.log(usersString);
let userArray = JSON.parse(usersString);
console.log(userArray);
console.log(typeof usersString);
console.log(typeof userArray);
console.log(userArray instanceof Array);

//写数据库
let addUsers = {id:3,name:"hebe",password:"ddd"};
userArray.push(addUsers);
let str = JSON.stringify(userArray);
fs.writeFileSync("./db/users.json",str);