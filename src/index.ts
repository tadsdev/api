import Koa from 'koa';
import BodyParser from 'koa-bodyparser';

import { PORT } from './configs/Environment';

const server = new Koa();

server.use(BodyParser());

server.listen(PORT, () => console.log(`SERVER STARTED PORT ${PORT}`));
