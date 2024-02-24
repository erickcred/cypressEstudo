/// <reference types="cypress" />

it ('Igualdade', () => {
  const a = 1

  expect(a).to.be.equal(1)
  expect(a, 'O valor deveria ser 1').to.be.equal(1)
  expect(a).to.be.equal(1)
  expect('a').not.to.be.equal('b')
})

it ('É verdadeiro', () => {
  const a = true
  const b = null
  let c

  expect(a).to.be.true
  expect(true).to.be.equal(a)
  expect(b).to.be.equal(null)
  expect(a).not.to.be.equal(null)
  expect(c).to.be.equal(undefined)
})

it ('Igualdade de objetos', () => {
  const obj = {
    a: 1,
    b: 2
  }

  expect(obj).to.be.equal(obj)
  expect(obj).to.be.equals(obj)
  expect(obj).eq(obj)
  
  /** Aqui ele vai dar erro pois ele não está comparando as propriedades e sem o objecto como um todo */
  //expect(obj).to.be.equal({ a: 1, b: 2 })
  /** Para poder contornar esse problema informamos o (deep, eql) para ele comparar o dados */
  expect(obj).to.be.deep.equal({ a: 1, b: 2 })
  expect(obj).eql({ a: 1, b: 2 })

  /** Validar em uma propriedade em um objeto */
  expect(obj).include({ a: 1 })
  /** Validando se um objeto possui uma propriedade */
  expect(obj).to.have.property('b')
  /** Validando se objeto possui uma propriedade e o valor dela */
  expect(obj).to.have.property('b', 2)
  /** Validando se o objeto não está vazio */
  expect(obj).to.not.be.empty
  /** Validando se o objeto é vazio */
  expect({}).to.be.empty
})

it ('Arrays', () => {
  const arr = [1, 2, 3]

  /** Validando todos os dados de um array */
  expect(arr).to.have.members([1, 2, 3])
  /** Validando um ou mais dados de um array */
  expect(arr).to.include.members([1, 3,])
  /** Validando se um array não está vazio */
  expect(arr).to.not.be.empty
  /** Validando se um array está vazio */
  expect([]).to.be.empty
})

it ('Tipos', () => {
  const num = 1
  const str = 'string'

  /** Validando se o tipo é númerico */
  expect(num).to.be.a('number')
  expect(num).to.not.be.a('string')
  /** Validanddo se o tipo é string */
  expect(str).to.be.a('string')
  expect(str).to.not.be.a('number')
  /** Validando se o tipo é Object */
  expect({}).to.be.a('object')
  /** Validando se o tipo é um Array */
  expect([]).to.be.a('array')
})

it ('String', () => {
  const str = 'String de teste'
  const str2 = '123423'

  /** Validando contexto de uma string */
  expect(str).to.be.equal('String de teste')
  /** Validando tamanho de uma string */
  expect(str).to.have.length(15)
  /** Validando comtexto parcial de uma string */
  expect(str).to.be.contains('teste')

  /** Validando por Regex */
  expect(str).to.match(/de/)
  expect(str).to.match(/^String/) // validando incicio 
  expect(str).to.match(/teste$/) // validadno final 
  expect(str).to.match(/.{15}/) // validadno o tamanho
  expect(str).to.match(/\w+/) // validadno se contem somente letras
  expect(str2).to.match(/^\d+$/) // validadno se contem somente números
})

it ('Numeros', () => {
  const num = 4
  const num1 = 1.50

  /** Validadndo iqualdade de valor */
  expect(num).to.be.equal(4)
  /** Validadndo se maior */
  expect(num).to.be.above(3)
  /** Validandod se menor */
  expect(num).to.be.below(7)

  /** Validadndo iqualdade de valor */
  expect(num1).to.be.equal(1.50)
  /** Validando numero flutuante com valor parcial e precisão de 0.1 */
  expect(num1).to.be.closeTo(1.5, 0.1)
  /** Validadndo se maior */
  expect(num1).to.be.above(1)
  /** Validando se menor */
  expect(num1).to.be.below(2)
})