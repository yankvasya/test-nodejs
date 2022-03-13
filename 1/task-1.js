const fs = require('fs')
const path = require('path')

const startDir = path.resolve(__dirname, '_text.txt')
const endDir = path.resolve(__dirname, '_result.txt')
const text = process.argv.slice(2).join(" ") || ''

const writeFileSync = (p, d) =>
    new Promise((resolve, reject) => {
      fs.writeFile(p, d, (err) => {
        if (err) reject(err)
        resolve()
      })
    })

const readFileSync = (p, encoding = "UTF-8") =>
    new Promise((resolve, reject) => {
      fs.readFile(p, { encoding },(err, d) => {
        if (err) reject(err)
        resolve(d)
      })
    })

const removeFileSync = (p) =>
    new Promise((resolve, reject) => {
      fs.unlink(p, (err) => {
        if (err) reject(err)

        resolve()
      })
    })

const words = (d) => {
  return d.split(" ").length
}

writeFileSync(startDir, text)
  .then(() => readFileSync(startDir))
  .then(data => words(data))
  .then(count => writeFileSync(endDir, `Кол-во слов: ${count}`))
  .then(() => removeFileSync(startDir))
  .catch(err => console.log(err))
