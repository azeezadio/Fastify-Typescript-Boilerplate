/// <reference types="node" />
import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
declare class App {
    app: FastifyInstance<Server, IncomingMessage, ServerResponse>;
    app_domain: string;
    app_port: string | number;
    constructor();
    listen(): void;
}
export default App;
