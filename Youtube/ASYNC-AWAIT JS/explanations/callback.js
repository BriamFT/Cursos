
// Concepto de "callback hell:
//  Solo es un ejemplo practico en donde demuestra como con una consulta sencilla
//  puede generar un problema de piramide a la derecha con las callbacks, lo cual lo vuelve dificil de entender.
function requestHandler(request,response) {
    User.findById(request.userId, function(error,user){
        if(error){
            response.send(error);
        }else{
            TextTrackList.findById(user.tasksId, function(error, tasks){
                if(error){
                    return res.send(error);
                }else{
                    tasks.completed = true;
                    tasks.save(function(error){
                        if(error){
                            return res.send(error);
                        }else{
                            res.send('Task completed');
                        }
                    });
                }
            });
        }
    });
}