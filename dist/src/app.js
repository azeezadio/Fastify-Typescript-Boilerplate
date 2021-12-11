"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = (0, tslib_1.__importDefault)(require("fastify"));
const router_1 = (0, tslib_1.__importDefault)(require("./routes/router"));
const dotenv = (0, tslib_1.__importStar)(require("dotenv"));
dotenv.config();
class App {
    constructor() {
        this.app_domain = '0.0.0.0';
        this.app_port = process.env.PORT || 5000;
        this.app = (0, fastify_1.default)({ logger: true });
        this.app.register(require('fastify-jwt'), {
            secret: process.env.JWT_SECRET,
        });
        this.app.register(router_1.default);
        this.listen();
    }
    listen() {
        this.app.listen(this.app_port, '0.0.0.0', () => {
            console.log(`App listening at port ${this.app_port} 🌟👻`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map