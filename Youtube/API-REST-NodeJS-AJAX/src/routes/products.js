const { request, response, json } = require('express');
const express = require('express');  
const router = express.Router();

const mysqlConnection = require('../database');


router.get('/products', (request,response) => {
    mysqlConnection.query('SELECT * FROM tproducts', (e, rows, fields) =>{
        
        e? console.log(e) : response.json(getResult(rows));
    });
});


router.post('/products', (request,response) => {
    const { nombre } = request.body;
    console.log(request.body);
    //response.send("Datos recibidos");
    const query = `INSERT INTO tproducts VALUES(?,?);`;
    mysqlConnection.query(query,["", nombre], (e, rows, fields) => {
        if(!e){
            response.json({Status: 'Usuario guardado'});
        }else{
            console.log(e);
        }
    });
});

router.put('/products/:id', (request,response) => {
    const { id } = request.params;
    const { nombre } = request.body;
    console.log(id,nombre);
    const query = `UPDATE tproducts SET nombre = ? WHERE ID = ?;`;
    mysqlConnection.query(query,[nombre, id], (e, rows, fields) => {
        if(!e){
            response.json({Status: 'Usuario actualizado'});
        }else{
            console.log(e);
        }
    });
});

router.delete('/products/:id', (request,response) => {
    const { id } = request.params;
    const query = `DELETE FROM tproducts WHERE ID = ?;`;
    mysqlConnection.query(query,[id], (e, rows, fields) => {
        if(!e){
            response.json({Status: 'Usuario eliminado'});
        }else{
            console.log(e);
        }
    });
});

router.post('/products/array', (request,response) => {
    const { array } = request.body;
    
    var sum = 0, mean = 0;
    array.forEach(element => {
        sum += element;
    });
    mean = sum/array.length;
    response.json({"request": mean})
});


function getResult(rows){
    return result = {
        "Status": 200,
        "msg": "Success",
        "data": rows
    };
}

module.exports = router;