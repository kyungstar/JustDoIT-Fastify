// ESM
import Fastify from 'fastify'
import formbody from '@fastify/formbody'

const fastify = Fastify({
    logger: true
})

fastify.get('/', async (request, reply) => {
    reply.type('application/json').code(200)
    return { hello: 'world' }
})

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
})