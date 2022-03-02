var http = require('http');
var fs = require('fs');
// write file for replace content if exist else new file and content created
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Created!');
});

http.createServer(function (req, res) {
  fs.readFile('mynewfile3.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// append file
// fs.appendFile('mynewfile3.txt', 'Test', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// open file

// fs.open('mynewfile3.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Open!');
// });


// Rename file
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// delete file

// fs.unlink('mynewfile3.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });