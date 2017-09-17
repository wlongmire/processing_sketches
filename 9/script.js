var fs = require('fs');
var parse = require('csv-parse');
var result = []


fs.createReadStream('./media/words.csv')
  .pipe(parse({delimiter:'/n'}))
  .on('data', (data)=>{
    result.push(data[0])
  })
  .on('end', ()=>{
    
    fs.writeFile("words.json",result.sort((a,b)=>(a.length - b.length)), ()=>(console.log("done")))
  })

// fs.createReadStream('./media/words2.csv')
//   .pipe(parse({delimiter:','}))
//   .on('data', (data)=>{
//     result.push(data[0])
//   })
//   .on('end', ()=>{
//     console.log(result)
//     fs.writeFile("words.json",result, ()=>(console.log("done")))
//   })