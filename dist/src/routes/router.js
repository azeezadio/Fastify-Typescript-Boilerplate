"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseController_1 = (0, tslib_1.__importDefault)(require("../controller/BaseController"));
async function router(fastify) {
    let baseController = new BaseController_1.default();
    fastify.register(baseController.base, { prefix: '/api/v1/basex' });
}
exports.default = router;
//# sourceMappingURL=router.js.map