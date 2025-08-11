// CRUD
const fileSystem = require("fs");
console.log('start')
// Read a File Sync

let data = fileSystem.readFileSync("f1.txt");
console.log("data from file 1 -> " + data);


// Read a File Async
fileSystem.readFile("f2.txt", function (err, data) {
  if (err) {
    console.error(err);
  }

  console.log("Data from file 2 -> "  + data);
});

console.log('End')
