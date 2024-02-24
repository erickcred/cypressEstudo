it('Sem teste no momento', () => {})


/** Utilizando Callbacks */
// const getSometing = (callback) => {
//   setTimeout(() => {
//     callback(12)
//   }, 2000)
// }

// const sistema = () => {
//   console.log('Init')
//   console.log('Processing others datas')
//   getSometing(some => {
//     console.log(`Someting is ${some}`)
//     console.log('End')
//   })
//   console.log('Others processing completed')
// }

// console.clear()
// sistema()

/** Utilizando Promises */
// const getSometing = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(13)
//     }, 2000)
//   })
// }

// const sistema = () => {
//   console.log('Init')
//   console.log('Processing others datas')
//   getSometing().then(some => {
//     console.log(`Someting is ${some}`)
//     console.log('End')
//   })
//   console.log('Others processing completed')
// }

// console.clear()
// sistema()

/** Utilizando Async Await */
const getSometing = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(13)
    }, 2000)
  })
}

const sistema = async () => {
  console.log('Init')
  console.log('Processing others datas')
  const some = await getSometing()
  console.log(`Someting is ${some}`)
  console.log('End')
  console.log('Others processing completed')
}

console.clear()
sistema()