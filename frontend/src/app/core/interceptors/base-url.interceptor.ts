import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  // Skip if already absolute URL
  if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
    return next(req);
  }

  // Prepend base URL to relative URLs
  const apiUrl = environment.apiUrl;
  const modifiedReq = req.clone({
    url: `${apiUrl}${req.url}`,
  });

  return next(modifiedReq);
};
