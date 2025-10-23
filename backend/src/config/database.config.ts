import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
  user: process.env.DATABASE_USER ?? 'qwizz_dev',
  password: process.env.DATABASE_PASSWORD ?? 'dev_password',
  name: process.env.DATABASE_NAME ?? 'qwizz_dev',
}));
