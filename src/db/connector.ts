// const fastifyPlugin = require('fastify-plugin')
import { FastifyInstance } from "fastify";
import fastifyMongodb from "fastify-mongodb";
import fastifyPlugin from "fastify-plugin";

const dbConnector = (fastify: FastifyInstance) => {
  fastify.register(fastifyMongodb, { url: "" });
};

export default fastifyPlugin(dbConnector);
