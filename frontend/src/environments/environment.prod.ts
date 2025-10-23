import { Environment } from '../app/core/models/environment.model';

export const environment: Environment = {
  production: true,
  apiUrl: 'https://api.qwizz.app/api',
  features: {
    enableDevTools: false,
    enableMockData: false,
  },
  websocket: {
    url: 'wss://api.qwizz.app',
    reconnectInterval: 5000,
  },
};
