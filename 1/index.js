const dotenv = require('dotenv')
dotenv.config()

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV)

console.log(process.argv.slice(2))

if(Math.random() > 0.5) {
  while (true) {

  }
} else {
  console.log('Конец работы')
  process.exit(1)
}
