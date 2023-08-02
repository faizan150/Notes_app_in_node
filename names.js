const fs = require('fs');
// const chalk = require('chalk');
// const Success = 'Note is Remove Successfully'
// chalk = (Success,bgGreen)



const message = 'Hello from names.js File '


const name = 'Hello from names.js File'

const fun = function add(a , b) {
    console.log('Inside the Add function');
    return a+b    
}

const fun2 = function subtract(a,b)
{
    console.log('Inside the Subtract Function');
    return a-b
}

const addnotes = function (title, body)
{

    const loadnotes = loadNotes()
    const duplicateNotes = loadnotes.filter(function (note) {
        return note.title === title        
    })
    if (duplicateNotes.length===0) {

        
        loadnotes.push({
            'title': title,
            'body' : body,
        })
    
        saveNotes(loadnotes)
        console.log('The New Note is Added!');
    }
    else
    {
        console.log('Title is duplicated! ');
    }
}

 function saveNotes (loadnotes) {

    const JsonFormat = JSON.stringify(loadnotes)
    const dataToSave = fs.writeFileSync('notes.json', JsonFormat);
}
function loadNotes() {
    try {
        const notes = fs.readFileSync('notes.json')
    const tobuffer = notes.toString()
    const xx = JSON.parse(tobuffer)
    return xx        
    } catch (error) {
        return []
    }

}
const removenote = function removeNote(title) {
    console.log('Hi from Remove Note Function \t'+title);
    let change = 0;
    const j =  loadNotes()
    const jfilter = j.filter(function (x){
        if(x.title !== title)
        {
            return x.title !== title
        }
        else
        {
            change = 1;
        }
    })
    if(change === 1)
    {
        saveNotes(jfilter)
        console.log(title,' Note is Remove');
    }
    else
    {
        console.log('This' + title+ ' Is not found');
    }
}

function loadData(){
    const i = fs.readFileSync('notes.json')
    const istring = i.toString()
    const iprase = JSON.parse(istring)
    console.log(iprase);
}

const listnotes = function listNotes(){
    const readlist = fs.readFileSync('notes.json')
    const readliststring = readlist.toString()
    const readlistprase = JSON.parse(readliststring)
    readlistprase.filter((title)=>console.log(title.title))
} 

const searchnotes = function readNotes(title){
    const  readdata =fs.readFileSync('notes.json')
    const readdatastring = readdata.toString()
    const readdataprase = JSON.parse(readdatastring)
    readdataprase.find((title) => {
        if(title.title === readdataprase.title){
            console.log(readdataprase);
        }
        else{
            console.log('No Such Title is found');
        }
    })
}

module.exports = {
    name:name,
    message:message,
    function_add:fun,
    function_sub:fun2,
    addnotes,
    removenote,
    listnotes,
    searchnotes
}
