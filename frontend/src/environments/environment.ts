import { Environment } from '../app/core/models/environment.model';

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  features: {
    enableDevTools: true,
    enableMockData: false,
  },
  websocket: {
    url: 'ws://localhost:3000',
    reconnectInterval: 5000,
  },
};
