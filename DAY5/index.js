//CRUD operations in fs module of nodejs

var fs = require("fs");
fs.mkdirSync('day_5');
fs.writeFileSync("day_5/hello.txt", "Hello");
fs.appendFileSync("day_5/hello.txt"," Peeps!");
fs.readFileSync("day_5/hello.txt","utf-8");
var data = fs.readFileSync("day_5/hello.txt","utf-8"); 
console.log(data);
fs.renameSync("day_5/hello.txt", "day_5/hello2.txt");

//deletes the file fs.unlinkSync("day_5/hello2.txt");
//deletes the folder fs.rmdirSync('day_5');

var Test = require("./require_test");
var obj = new Test();
console.log(obj.print());


