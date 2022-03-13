const fs = require('fs')
const path = require('path')

// console.log('start')
//
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) throw err
//
//   console.log('Папка(-и) создана(-ы)')
// })
//
// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) throw err
//
//   console.log('Папка была удалена')
// })

// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'text',(err) => {
//   if (err) throw err
//
//   console.log('Данные были успешно записаны в файл')
//
//   fs.appendFile(path.resolve(__dirname, 'text.txt'), '\nДобавочный файл', {encoding: 'utf-8'},(err) => {
//     if (err) throw err
//
//     console.log('Данные были успешно записаны в файл')
//   })
// })

console.log('start')

const writeFileAsync = async (path, data) =>
    new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err) => {
        if (err) reject(err)
        resolve(data)
      })
    })

const appendFileAsync = async (path, data) =>
    new Promise((resolve, reject) => {
      fs.appendFile(path, data, (err) => {
        if (err) reject(err)
        resolve(data)
      })
    })

const readFileAsync = async (path) =>
    new Promise((resolve, reject) => {
      fs.readFile(path,{encoding: 'utf-8'}, (err, data) => {
        if (err) reject(err)
        resolve(data)
      })
    })

const removeFileAsync = async (path) =>
    new Promise((resolve, reject) => {
      fs.rm(path, (err) => {
        if (err) reject(err)
        resolve()
      })
    })

const dir = path.resolve(__dirname, 'test')
const p = path.resolve(__dirname, 'text1.txt')
const p2 = path.resolve(__dirname, 'text2.txt')
const d1 = 'Привет\n'
const d2 = 'Макарошка'

// writeFileAsync(p, d1)
//     .then(data => {
//       console.log(`Текст ${data} успешно записан`)
//       return appendFileAsync(p2, d2)
//     })
//     .then(data => {
//       console.log(`Текст ${data} успешно записан`)
//     })
//     .catch(error => {
//       console.log(`Ошибка ${error}`)
//     })

// readFileAsync(p)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

removeFileAsync(p2)
    .then(() => console.log('Удаление выполнено успешно'))
    .catch(err => console.log(`${err}`))

console.log('end')
