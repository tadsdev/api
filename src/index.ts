import Koa from 'koa';
import BodyParser from 'koa-bodyparser';

import { PORT } from './configs/Environment';
import router from './routes';

const server = new Koa();

server.use(BodyParser());

console.log(router);
server.use(router.routes());

server.listen(PORT, () => console.log(`SERVER STARTED PORT ${PORT}`));
