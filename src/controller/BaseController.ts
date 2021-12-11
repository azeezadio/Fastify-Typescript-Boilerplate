import { FastifyReply, FastifyRequest } from 'fastify';
import { Biometric } from 'src/types/interfaces/base.interface';

class BaseController {
  async base(fastify: any) {
    fastify.post(
      '/hook',
      async (request: Biometric, reply: FastifyReply): Promise<any> => {
        try {
          console.log('request.body=>>', request.body);

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
