const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000
//lista de produtos da loja
const produtos = [
    {id: 1, nome: "Smartphone Motorola G85", preco: 1750.99, quantidade: 10},
    {id: 2, nome: "TV LG OLED 42 polegadas", preco: 1400.00, quantidade: 22},
    {id: 3, nome: "Notebook Lenovo i7 16GB", preco: 4856.99, quantidade: 5}
]
app.get('/', (req, res) => {
  res.redirect('/produtos')
})
app.get('/produtos', (req, res) => {
    res.json(produtos)
})
app.get('/produtos/:id', (req, res) => {
    const id = +req.params.id //pega a valor do 'id' passado na requisição
    if (id >= 0) {
        /* Anda no array de produtos e comparar o 'id'de cada produt com o id pedido 
           na requisição. Se encontrar, devolve o produto. Caso contrário, devolve undefined */
        const prod = produtos.find(p => p.id === id)
        if (prod) {
            res.json(prod)
        } else {
            res.json({})
        }
    } else {
        res.json({})
    }
})
app.get('/produtos/:id/preco', (req, res) => {
    const id = +req.params.id //pega a valor do 'id' passado na requisição
    if (id >= 0) {
        /* Anda no array de produtos e comparar o 'id'de cada produt com o id pedido 
           na requisição. Se encontrar, devolve o produto. Caso contrário, devolve undefined */
        const prod = produtos.find(p => p.id === id)
        if (prod) {
            res.json(prod.preco)
        } else {
            res.json({})
        }
    } else {
        res.json({})
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})