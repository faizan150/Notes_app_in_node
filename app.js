
// const { demandOption } = require('yargs')
const yargs = require('./Learn Node/node_modules/yargs')
const notess = require('./names.js')
const RN =require('./names.js')


yargs.command({
    command:'add',
    describe:'Add new Notes in the List',
    builder:({
        title:{
            describe: 'Add New Notes',
            type:'string',
            demandOption:true,
        },
        body:{
            describe:'This is the Body of the Page',
            type:'string',
            demandOption:true,
        }
    }),
    handler: (argv)=> nottess.addnotes(argv.title,argv.body)
})

yargs.command({
    command:'remove',
    describe:'Remove Notes from the list',
    builder:({
        title:{
            describe:'Remove List items',
            type:'string',
            demandOption:true,
        }
    }),
    handler: (argv) => RN.removenote(argv.title)
})

yargs.command({
    command:'list-title',
    describe:'List Titles in the List ',
    handler: notess.listnotes()
})

yargs.command({
    command:'search-title',
    describe:'Seaerch by title of the event',
    builder:({
        title:{
            describe:'Enter Title',
            demandOption: true,
            type:'string'
        }
    }),
    handler: (argv) => notess.searchnotes(argv.title)
})

console.log(yargs.argv);






// const empty = 'SDJNSKJN';
// console.log(validator.isUppercase(empty));
// const text = 'this@gmail.com'
// console.log('Is this is a email \n The result is \t',validator.isEmail(text));
// console.log(chalk.bold.bgBlue(text));

