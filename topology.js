module.exports = {
  name: 'attak-example',
  processors: {
    hello_world_spout: {
      source: './processors/hello_world_spout'
    },
    reverse: {
      source: './processors/reverse'
    }
  },
  streams: [
    {
      to: 'reverse',
      from: 'hello_world_spout',
      fields: {
        source_field_1: 'processor_field_1'
      }
    }
  ]
};