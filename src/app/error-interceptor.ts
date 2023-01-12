import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { Injectable } from "@angular/core";
import { ErrorComponent } from "./error/error.component";
import { ErrorService } from "./error/error.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

constructor( public dialog: MatDialog, private errorService: ErrorService ){}


intercept(req: HttpRequest<any>, next: HttpHandler) {
  return next.handle(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = "An unknown error occurred!";
      if (error.error.message) {
        errorMessage = error.error.message;
      }
      this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
      // this.errorService.throwError(errorMessage);
      return throwError(error);
    })
  );
}
}
