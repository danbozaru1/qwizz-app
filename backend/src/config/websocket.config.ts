import { registerAs } from '@nestjs/config';

export default registerAs('websocket', () => ({
  port: parseInt(process.env.WS_PORT ?? '3001', 10),
  reconnectInterval: parseInt(process.env.WS_RECONNECT_INTERVAL ?? '5000', 10),
}));
