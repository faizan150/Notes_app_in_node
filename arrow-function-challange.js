const tasks = {
    tasks:[{
        text: '1st Task',
        completed: true
    },
    {
        text: '2nd Task',
        completed: false
    },
    {
        text: '3rd Task',
        completed: false
    }
],
    getTasksTodo(){
        const filter = tasks.tasks.filter(function(note){
                return note.completed === false
        })
        // console.log(filter);
        return filter
                        
    }
}
console.log(tasks.getTasksTodo());


// const filter = tasks.tasks.filter(function(note){
//     if (note.completed === false ) {
//         return note.completed === false
//     }
// })

// const getTasks = function getTasksCompleted(){

// }