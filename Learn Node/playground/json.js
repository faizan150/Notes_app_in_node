const fs = require('fs');

// const data =
// {
//     'name' :'Ali Abbas ',
//     'age' : '17',
//     'planet' : 'earth',
// }

// console.log("\n\n\n\n"+"The Data Before Json Format is"+data.age+data.name+data.planet+"\n\n\n\n");

// const jsonformat = JSON.stringify(data);


// console.log('Data in Json Format is'+ jsonformat);
// const saving_data =fs.appendFileSync('json_data.json',jsonformat);
const read_data= fs.readFileSync('json_data.json');


console.log('\n\nFetch Data from the File is \n\n'+read_data.toString()+'\n\n');

// fs.writeFileSync('json_data.json',jsonformat);


const normal_array = JSON.parse(read_data);

console.log(normal_array);