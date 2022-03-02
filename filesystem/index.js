
// This is syncronus methods which is not take callback functions like () => {}
const fs = require('fs');
const process = require('process');
fs.writeFileSync('createFile.txt','this is sample file'); // create file if file not exist with data 
// fs.writeFileSync('createFile.txt','this is sample file override'); // override data
// fs.appendFileSync('createFile.txt','this is append data in sample file'); add more data in createFile
// const readData = fs.readFileSync('createFile.txt','utf8'); // Read data in from file , bydefault buffreData return,so encode that data
// console.log('read data',readData);
// fs.unlinkSync('createFile.txt'); // Delete file

// this is asyncronus file methods which require callback function
// const fs = require('fs');
// fs.writeFile('createFile.txt','this is sample file',(err)=>{ // create file if file not exist with data 
//     if(err){
//         console.log('err',err);
//     } else {
//        console.log("File written successfully\n");
//        console.log('Data=>',fs.readFileSync('createFile.txt','utf8')); 
//     }
// });
// fs.writeFile('createFile.txt', ' this is another data', (err)=>{ // override data 

// })
// fs.appendFile('createFile.txt', 'Append Data to createFile', (err)=>{ // append data 
    
// })

// fs.readFile('createFile.txt', 'utf8', (err, data) => { read file
//     console.log(data);
// });
// console.log('readFile called');


// fs.unlink('createFile.txt', (err) => {
//     if (err) throw err;
//     console.log('createFile.txt was deleted');
//   });

console.log('process',process);
process.exit(1);