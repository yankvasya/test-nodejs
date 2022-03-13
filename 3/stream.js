// readable - чтение
// writable - запись
// duplex  для чтения и записи
// transform для чтения и записи + изменение данных по мере чтения

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'text.txt'), (err, data) => {
//   if (err) throw err
//   console.log(data)
// })
//
const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'))
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'text1.txt'), {encoding: 'utf-8'})

let i = 1

stream.on('data', (chunk) => {
  writeStream.write(`${i++})` + chunk + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
})

stream.on('end', () => {
  writeStream.end()
  console.log('конец')
})
