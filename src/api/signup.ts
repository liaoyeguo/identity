import { FastifyInstance } from "fastify";

const signup = (fastify: FastifyInstance) => {
  //   const db = fastify.mongo.db;

  fastify.post(
    "/signup",
    // {
    //   schema: {
    //     body: {
    //       type: "object",
    //       properties: {
    //         mail: { type: "string" },
    //         passwaord: { type: "string" },
    //       },
    //     },
    //   },
    // },
    async (request, reply) => {
      console.log("called !");
      reply.send({ result: "hellow" });
    }
  );
};

export default signup;
