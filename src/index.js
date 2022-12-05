const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4') //id unico


const app = express()
app.use(express.json())
const cortes = []
const pigmentacoes = []
const materiais = []


//rota cortes

app.get('/cortes',(request, response) =>{
    return response.json(cortes)
})//visualizar
app.post('/cortes', (request, response) =>{
    const {nome, preco} = request.body
    const corte = {id: uuid(), nome, preco}
    cortes.push(corte)
    return response.status(201).json(corte)

})//inserir
//put atualiza os dados
app.put('/cortes/:id',(request, response) => {
    const { id } = request.params
    const { nome, preco } = request.body
    const newCortes = {id, nome, preco}
    const corteindex = cortes.findIndex(corte => corte.id == id)
    cortes[corteindex] = newCortes;
    return response.json(newCortes)
})
//delete apaga
app.delete('/cortes/:id',(request, response) => {
    const { id } = request.params
    const corteindex = cortes.findIndex(corte => corte.id == id)
    cortes.splice(corteindex, 1)
    return response.status(204).send()
})

//rota pigmentacoes

app.get('/pigmentacoes',(request, response) =>{
    return response.json(pigmentacoes)
})//visualizar
app.post('/pigmentacoes', (request, response) =>{
    const {cor, tempo} = request.body
    const pigmentacao = {id: uuid(), cor, tempo}
    pigmentacoes.push(cor)
    return response.status(201).json(cor)

})//inserir
//put atualiza os dados
app.put('/pigmentacoes/:id',(request, response) => {
    const { id } = request.params
    const { cor, tempo } = request.body
    const newPigmentacoes = {id, cor, tempo}
    const corindex = pigmentacoes.findIndex(cor => cor.id == id)
    cortes[corindex] = newPigmentacoes;
    return response.json(newPigmentacoes)
})
//delete apaga
app.delete('/pigmentacoes/:id',(request, response) => {
    const { id } = request.params
    const corindex = pigmentacoes.findIndex(cor => cor.id == id)
    pigmentacoes.splice(corindex, 1)
    return response.status(204).send()
})

//rota materiais

app.get('/materiais',(request, response) =>{
    return response.json(materiais)
})//visualizar
app.post('/materiais', (request, response) =>{
    const {nome, marca} = request.body
    const material = {id: uuid(), nome, marca}
    materiais.push(material)
    return response.status(201).json(material)

})//inserir
//put atualiza os dados
app.put('/materiais/:id',(request, response) => {
    const { id } = request.params
    const { nome, marca } = request.body
    const newMateriais = {id, nome, marca}
    const materialindex = materiais.findIndex(material => material.id == id)
    materiais[materialindex] = newMateriais;
    return response.json(newMateriais)
})
//delete
app.delete('/materiais/:id',(request, response) => {
    const { id } = request.params
    const materialindex = materiais.findIndex(material => material.id == id)
    materiais.splice(materialindex, 1)
    return response.status(204).send()
})


app.listen(8181, () =>{
    console.log('O servidor foi iniciado!')
})


