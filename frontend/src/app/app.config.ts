import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHotToastConfig } from '@ngxpert/hot-toast';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { baseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { GameEffects } from './store/game/game.effects';
import { gameReducer } from './store/game/game.reducer';
import { UIEffects } from './store/ui/ui.effects';
import { uiReducer } from './store/ui/ui.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([baseUrlInterceptor, loadingInterceptor, errorInterceptor])),
    provideHotToastConfig({
      duration: 3000,
      dismissible: true,
      position: 'top-right',
    }),
    provideStore({
      game: gameReducer,
      ui: uiReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideEffects([GameEffects, UIEffects]),
  ],
};
