# compare adaptor (expressJs, fastify, hyper-express)

## test

k6 -> duration: '90s', target: 10000

- see test/stress/simple-benchmark.ts (target 10000 with duration 1m forced to change duration 90s due to k6)

## measure

1. fail probability

2. http_req_duration(p95)

## result

(adaptor: [fail probability, http_req_duration])

1. hyper-express: [0, 718µs]

2. fastify: [0, 1.55ms]

3. expressjs: [0.00013, 60.22ms]
