"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    async base(fastify) {
        fastify.post('/hook', async (reply) => {
            try {
                return reply.send({
                    message: 'Fastify Typescript Blueprint',
                    data: 'Version 1.0.0',
                });
            }
            catch (e) {
                return reply.status(400).send(e);
            }
        });
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map