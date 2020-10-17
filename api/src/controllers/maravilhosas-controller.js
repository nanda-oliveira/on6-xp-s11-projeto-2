const { request } = require("express")
const { selectAllData, updateData } = require("../models/maravilhosas-models")
const model = require("../models/maravilhosas-models")

//Nomes dos métodos para implementação:

//getMaravilhosas GET

const getMaravilhosas = (request, response) => {
    response.status(200).send(model.selectAllData())
}

//getMaravilhosaById GET

const getMaravilhosaById = (request, response) => {
   
    if (model.selectDataById()) {
        response.status(200).send(model.selectDataById())
    } else {
        response.status(404).send("Maravilhosa nao encontrada")
    }
}

//addMaravilhosa POST

const addMaravilhosa = (request, response) => {
    
    

    model.insertData().push(addMaravilhosa)
    response.status(201).send(addMaravilhosa)

}
//updateMaravilhosa 
const updateMaravilhosa = (request, response) => {
    
    response.status(200).send(model.updateData())
}


//deleteMaravilhosa

    const deleteMaravilhosa = (request, response) => {
        response.send(model.deleteData())

    }

    module.exports = {
        getMaravilhosas,
        getMaravilhosaById,
        addMaravilhosa,
        updateMaravilhosa,
        deleteMaravilhosa

    }   
