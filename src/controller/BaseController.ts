import { FastifyReply, FastifyRequest } from 'fastify';

class BaseController {
  async base(fastify: any) {
    fastify.post(
      '/hook',
      async (request: any, reply: FastifyReply): Promise<any> => {
        try {
          return reply.status(200).send({
            status: true,
            message: 'Fastify Typescript Blueprint',
            data: 'Version 1.0.0',
          });
        } catch (e) {
          return reply.status(400).send(e);
        }
      }
    );
  }
}
export default BaseController;
