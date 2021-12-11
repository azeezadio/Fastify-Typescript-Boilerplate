"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = (0, tslib_1.__importDefault)(require("./src/app"));
const app = new app_1.default();
app.listen();
console.log(`🚀  Fastify server running on port ${process.env.PORT}`);
//# sourceMappingURL=server.js.map