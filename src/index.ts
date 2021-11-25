import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import Cors from '@koa/cors';

import { PORT } from './configs/Environment';
import router from './routes';

const server = new Koa();

server.use(BodyParser());
server.use(Cors());

server.use(router.routes());

server.listen(PORT, () => console.log(`SERVER STARTED PORT ${PORT}`));
