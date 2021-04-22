const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json()); //indica para o express que usarei os dados em Json

let usuarios = [
    {nome: "Sara", sobrenome: "Carvalho"}
]

// http://localhost:3000/inicio 
app.get("/inicio", (request, response) =>{
    return response.send('Olá mundo!!');
});

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    return response.json(usuarios);
});

// http://localhost:3000/usuarios
app.post("/usuarios", (request, response) => {
    
    const {nome, sobrenome} = request.body;

    usuarios.push({nome, sobrenome});

    return response.json({nome, sobrenome})

});

// http://localhost:3000/usuarios/sara
app.put("/usuarios/:nome", (request, response) => {
    const {nome} = request.params;
    //qual tem o nome igual e substituir o sobrenome

    const {sobrenome} = request.body;

    return //
});

//escutando o servidor
app.listen(3000, () => {
    console.log('Servidor Rodando!!!')
})