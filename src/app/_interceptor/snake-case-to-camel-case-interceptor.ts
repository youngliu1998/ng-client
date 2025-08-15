import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

// 遞迴轉換函式，與之前 Class 實作的邏輯相同
function convertKeysToCamelCase(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertKeysToCamelCase(item));
  }

  const newObj: any = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
      newObj[newKey] = convertKeysToCamelCase(obj[key]);
    }
  }
  return newObj;
}

export const snakeCaseToCamelCaseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        return event.clone({ body: convertKeysToCamelCase(event.body) });
      }
      return event;
    })
  );
};