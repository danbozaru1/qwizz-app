import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HotToastService } from '@ngxpert/hot-toast';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(HotToastService);

  return next(req).pipe(
    catchError((error) => {
      let message = 'Connection failed';

      if (error.status === 400) {
        message = 'Invalid request';
      } else if (error.status === 404) {
        message = 'Not found';
      } else if (error.status === 500) {
        message = 'Server error';
      } else if (error.status === 0) {
        message = 'Connection failed';
      }

      toast.error(message);
      return throwError(() => error);
    })
  );
};
