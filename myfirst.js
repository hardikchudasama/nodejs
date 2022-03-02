var http = require('http');
var os = require('os');
var dt = require('./myfirstmodule')
console.log("Platform: " + os);
console.log("Architecture: " + os.cpus());
console.log("freememory: " + os.freemem());
var free_memory = os.freemem();
// console.log("hostname: " + os.hostname());
var free_mem_in_kb = free_memory/1024;
var free_mem_in_mb = free_mem_in_kb/1024;
var free_mem_in_gb = free_mem_in_mb/1024;

console.log("free_mem_in_gb: " + free_mem_in_gb);

var cpuData = os.cpus();

cpuData.forEach(data => {
    console.log('data',data);
})

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Today Date and Time = ', + dt.myDateTime())
    res.end();
}).listen(8080);
