const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const chinheses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    

    // mulher chinesa com menor salário ? 
    const funcChinesaComMenorSalario = funcionarios.filter(chinheses).filter(mulheres).reduce(menorSalario)
    console.log(funcChinesaComMenorSalario)
})