# attak hello world

Simple attak topology with two processors:

## Installation

npm install

## Simulate locally

`attak simulate`

## Deploy

Create a `.env` file using `.env.example` as a template. Then:

`attak deploy`


## Code Layout

topology.js - example topology configuration (see `package.json`)
processors/hello_world_spout.js - produces an object `{test: 'hello world'}` when triggered
processors/reverse.js - reverses event text and emits as a string