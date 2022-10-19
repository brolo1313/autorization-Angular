import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private dialog: MatDialog) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const getToken = JSON.parse(localStorage.getItem('user')!)
        const authReq = !!getToken ? req.clone({
            setHeaders: { Authorization: `Bearer ${getToken.authToken.accessToken}` },
        }) : req;
        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                switch (error.status) {
                    case 400:
                        alert('400 Bad request')
                        break;
                    case 401:
                        alert('401 Unauthorized')
                        break;
                    default:
                }
                return throwError(error);
            })
        )
    }
}
