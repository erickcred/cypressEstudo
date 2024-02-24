/// <reference types="cypress" />

it ('A external test', () => {

})

describe('Should group tests', () => {
  describe('Should group more specific tests', () => {
    it.skip ('A specific test', () => {

    })
  })

  describe('Should second group more specific tests', () => {
    it ('A specific second test', () => {

    })
  })

  it ('A internal test', () => {

  })
})