const EventEmitter = require('events')
const emitter = new EventEmitter()

logEvent = (eventType, emitter) => {
    const timestamp = new Date().toDateString()
    emitter.emit('log', eventType, timestamp)
}

emitter.on('log',(eventType, timestamp) => {
    console.log(`Event type: ${eventType}, Timestamp: ${timestamp}`)
})

logEvent('Server started', emitter)
logEvent('User is logged in', emitter)
logEvent('Error', emitter)
logEvent('Server shutdown', emitter)