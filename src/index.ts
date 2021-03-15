import Fastify from "fastify";
import signup from "./api/signup";
// import connector from "./db/connector";

const fastify = Fastify({});

// fastify.register(connector);
fastify.register(signup);

const PORT = 3000;
const start = async () => {
  try {
    console.log("server is listening on ", PORT);
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
