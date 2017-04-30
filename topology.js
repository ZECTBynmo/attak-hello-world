module.exports = {
  name: 'attak-example',
  processors: {
    hello_world_spout: './processors/hello_world_spout',
    reverse: './processors/reverse'
  },
  streams: [
    ['reverse', 'hello_world_spout']
  ]
};