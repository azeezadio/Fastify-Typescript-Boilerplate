import { FastifyRequest } from 'fastify';

interface Biometric extends FastifyRequest {
  first_name: string;
  last_name: string;
  isboy?: boolean;
}

export { Biometric };
