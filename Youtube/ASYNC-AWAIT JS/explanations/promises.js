

// Utilizando PROMESAS
function requestHandler(request,response){
    User.findById(request.userId)
        .then(function(user){
            return Tasks.findById(user.tasksId);
        })
        .then(function(task){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function(){
            response.send('Task completed');
        })
        .catch(function(errors){
            response.send(errors);
        })
}