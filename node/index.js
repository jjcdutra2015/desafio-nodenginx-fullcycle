const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values ('Julio')`
    connection.query(sql)
    connection.query('select * from people', (err, res) => {
        res.send(`<h1>Full Cycle!</h1> <br> <h2>${res.map(user => `${user.name}`)}</>h2`)
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})