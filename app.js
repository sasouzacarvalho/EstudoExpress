const express = require('express');
const app = express();

let usuarios = [
    {nome: "Sara", sobrenome: "Carvalho"}
]

// http://localhost:3000/inicio 
app.get("/inicio", (request, response) =>{
    return response.send('Olá mundo!');
});

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    console.log(request);
    return response.json(usuarios);
});

//escutando o servidor
app.listen(3000, () => {
    console.log('Servidor Rodando!!!')
})