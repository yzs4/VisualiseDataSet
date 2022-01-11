const fs = require('fs')
const path = require('path')
const os = require('os')

const argn = process.argv.length
if (argn < [3]) folder = '.'
else var folder = process.argv[2]


var results = [];

var heders = 'Datetime; faceDistance; earDepth; noseDepth; Tilt; Turn; Roll; templeLength'
const isDirectory = fileName => {
  return fs.lstatSync(fileName).isDirectory()
}
var entries = fs.readdirSync(folder)


var csvFile =path.join(folder, 'tempelsize.csv')
  fs.writeFile(csvFile, heders, function(err, result){
    if(err) console.log('error', err)
    });
     
    
  for (var i in entries) {
    
    var fPath = path.join(folder, entries[i])
    
    if (fs.lstatSync(fPath).isDirectory()){
    
      var text = fs.readFileSync(path.join(folder, entries[i],'index.json'))
      
      var doc = JSON.parse(text)
      var csvline = "\n"+`${entries[i]}`+"; "+ `${doc.faceDistance}`+"; "+ `${doc.earTrDepth}`+"; "+ `${doc.noseTrDepth}`+"; "+ `${doc.faceAngleArray[0]}`+"; "+ `${doc.faceAngleArray[1]}`+"; "+ `${doc.faceAngleArray[2]}`+"; "+ `${doc.templeLength}`+"; "
      fs.appendFile(csvFile, csvline, function(err, result){
        if(err) console.log('error', err)
       
  })}}
