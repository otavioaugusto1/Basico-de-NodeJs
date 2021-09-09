const fs = require("fs")


const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assíncrono
fs.readFile(caminho, 'utf-8',(err,conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// como é formato JSON, poderia ter feito dessa maneira:
const config = require('./arquivo.json')
console.log(config.db)