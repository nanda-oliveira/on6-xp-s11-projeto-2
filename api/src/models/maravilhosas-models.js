let allData = require("../data/data.json")
//const { all } = require("../routes/maravilhosas-routes")


// selectAllData
const selectAllData = () => {
    return allData
}

//selectDataById
const selectDataById = (identificador) =>{
    const maravilhosaID = allData.find(item => allData.id === identificador)
    return maravilhosaID
}

//insertData
const insertData = (body) => {
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
    return
}
//updateData
const updateData = ()=>{
    const maravilhosaAtualizada = request.body
    const id = parseInt(request.params.id)
    const maravilhosaParaAtualizar = maravilhosas.find(maravilhosa => maravilhosa.id == id)

    Object.keys(maravilhosaAtualizada).forEach((chave) => {
        maravilhosaParaAtualizar[chave] = maravilhosaAtualizada[chave]
    })
    return
}


//deleteData
const deleteData = ()=> {
    const { id } = request.params
    let filtarMaravilhosa = maravilhosas.filter(maravilhosa => {
        maravilhosas.id === id
    })[0]

    const index = maravilhosas.indexOf(filtarMaravilhosa)

    maravilhosas.splice(index, 1)
    return
} 



module.exports = {
    selectAllData,
    selectDataById,
    insertData,
    updateData,
    deleteData
}

