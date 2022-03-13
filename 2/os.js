const os = require('os')
const cluster = require('cluster')

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 4; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker) => {
    console.log(`УБИТ ${worker.process.pid}`)
  })
} else {
  console.log(`Воркер с pid=${process.pid} запущен`)

  setInterval(() => {
    console.log(`${process.pid} еще работает`)
  }, 5000)
}

