const nome = "Marcos"
const sexo = "M"
const idade = 21
const contribuicao = 20

const calculoContribuicao  = idade + contribuicao

// essas variaveis irão retornar true ou false

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if (homemPodeAposentar || mulherPodeAposentar) {
  console.log(`${nome} pode se aposentar`)
}
else {
  console.log(`${nome}, não pode se aposentar`)
}