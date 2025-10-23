export interface Environment {
  production: boolean;
  apiUrl: string;
  features: {
    enableDevTools: boolean;
    enableMockData: boolean;
  };
  websocket: {
    url: string;
    reconnectInterval: number;
  };
}
