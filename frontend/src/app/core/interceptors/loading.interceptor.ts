import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { Store } from '@ngrx/store';
import { setLoading } from '../../store/ui/ui.actions';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  store.dispatch(setLoading({ loading: true }));

  return next(req).pipe(
    finalize(() => {
      store.dispatch(setLoading({ loading: false }));
    })
  );
};
