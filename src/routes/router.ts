import BaseController from '../controller/BaseController';

import { FastifyInstance } from 'fastify';

export default async function router(fastify: FastifyInstance) {
  let baseController = new BaseController();
  fastify.register(baseController.base, { prefix: '/api/v1/base' });
}
