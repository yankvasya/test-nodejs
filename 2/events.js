const Emmiter = require('events')

const emmiter = new Emmiter()

emmiter.once('message', (data, ...second)=> {
  console.log('Первый аргумент:', data)
  console.log('Второй аргумент:', second)
})

const MESSAGE = process.argv.slice(2) || ''

MESSAGE.length ?
    emmiter.emit('message', ...MESSAGE) :
    emmiter.emit('message', ...['Вы', 'не', 'указали', 'сообщение'])


emmiter.emit('message', ...['Вы', 'не', 'указали', 'сообщение'])
emmiter.emit('message', ...['Вы', 'не', 'указали', 'сообщение'])
emmiter.emit('message', ...['Вы', 'не', 'указали', 'сообщение'])
emmiter.emit('message', ...['Вы', 'не', 'указали', 'сообщение'])
emmiter.emit('message', ...['Вы', 'не', 'указали', 'сообщение'])
