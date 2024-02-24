it ('Nada agora', () => {})

// function soma(a, b) {
//   return a + b
// }

// const soma = (a, b) => {
//   return a + b
// }

// const soma = (a, b) => a + b

// const soma = (a) => a + a
// const soma = a => a + a
const soma = () => 5 + 5

console.clear()
console.log(`Soma de a+b = ${soma(1, 20)}`)

it ('Um teste com função...', function() {
  console.log('Função', this)
})

it ('Um teste com arrow...', () => {
  console.log('Arrow', this)
})