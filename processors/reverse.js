exports.handler = function(event, context, callback) {
  context.emit('reversed', event.text.split('').reverse().join(''));
  callback()
}