import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3003;

new App().start(PORT);
