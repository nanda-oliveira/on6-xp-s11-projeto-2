const { request } = require("express")
const maravilhosas = require("../models/maravilhosas-models")

//Nomes dos métodos para implementação:

//getMaravilhosas GET

const getMaravilhosas = (request, response) => {
    response.status(200).send(maravilhosas)
}

//getMaravilhosaById GET

const getMaravilhosaById = (request, response) => {
    const id = request.params.id
    const maravilhosaID = maravilhosas.find(maravilhosa => maravilhosa.id == id)
    if (maravilhosaID) {
        response.status(200).send(maravilhosaID)
    } else {
        response.status(404).send("Maravilhosa nao encontrada")
    }
}

//addMaravilhosa POST

const addMaravilhosa = (request, response) => {
    const { name, photo, subtitle, about, phrase, history, addedBy } = request.body
    const novaMaravilhosa = {
        id: id,
        name: name,
        photo: photo,
        subtitle: subtitle,
        about: about,
        phrase: phrase,
        history: history,
        addedBy: addedby
    }

    maravilhosas.push(addMaravilhosa)
    response.status(201).send(addMaravilhosa)

}
//updateMaravilhosa 
const updateMaravilhosa = (request, response) => {
    const maravilhosaAtualizada = request.body
    const id = parseInt(request.params.id)
    const maravilhosaParaAtualizar = maravilhosas.find(maravilhosa => maravilhosa.id == id)

    Object.keys(maravilhosaAtualizada).forEach((chave) => {
        maravilhosaParaAtualizar[chave] = maravilhosaAtualizada[chave]
    })

    response.status(200).send(maravilhosaParaAtualizar)


    //deleteMaravilhosa

    const deleteMaravilhosa = (request, response) => {
        const { id } = request.params
        let filtarMaravilhosa = maravilhosas.filter(maravilhosa => {
            maravilhosas.id === id
        })[0]

        const index = maravilhosas.indexOf(filtarMaravilhosa)

        maravilhosas.splice(index, 1)

        response.send(maravilhosas)

    }}

    module.exports = {
        getMaravilhosas,
        getMaravilhosaById,
        addMaravilhosa,
        updateMaravilhosa,
        deleteMaravilhosa

    }   
