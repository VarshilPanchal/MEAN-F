import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification-service/notification.service';
import { LocalstorageService } from '../localstorage-service/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorService: NotificationService,
    private localStorageService: LocalstorageService,
  ) { }


  post(url: string, body: string): Observable<any> {
    const requestOptions = this.getRequestOptions();

    return this.httpClient.post(url, body, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
    // .map((res: Response) => {
    //   return res;
    // })
    // .catch((error: any) => {
    //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
    //   return Observable.throw(error);
    // });
  }

  get(url: string): Observable<any> {

    const requestOptions = this.getRequestOptions();

    return this.httpClient.get(url, requestOptions).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: any) => {
        this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
        return Observable.throw(error);
      })
    );
    // .map((res: Response) => {
    //   return res;
    // })
    // .catch((error: any) => {
    //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
    //   return Observable.throw(error);
    // });
  }

  put(url: string, body: string): Observable<any> {
    const requestOptions = this.getRequestOptions();

    return this.httpClient.put(url, body, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
    // .map((res: Response) => {
    //   return res;
    // })
    // .catch((error: any) => {
    //   console.log(error);
    //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
    //   return Observable.throw(error);
    // });
  }


  delete(url: string): Observable<any> {
    const requestOptions = this.getRequestOptions();

    return this.httpClient.delete(url, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
    // .map((res: Response) => {
    //   return res;
    // })
    // .catch((error: any) => {
    //   console.log(error);
    //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
    //   return Observable.throw(error);
    // });
  }

  // postBlob(url: string, body: string): Observable<any> {
  //   // const requestOptions = this.getRequestOptionsBlob();
  //   const requestOptions = this.getRequestOptionsPostBlob();

  //   return this.httpClient.post(url, body, requestOptions)
  //     .pipe(
  //       map((res) => {
  //         return res;
  //       }),
  //       catchError((error: any) => {
  //         this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
  //         return Observable.throw(error);
  //       })
  //     )
  // .map((res: Response) => {
  //   return res;
  // })
  // .catch((error: any) => {
  //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
  //   return Observable.throw(error);
  // });
  // }

  // putBlob(url: string, body: string): Observable<any> {
  //   const requestOptions = this.getRequestOptionsPutBlob();
  //   return this.httpClient.put(url, body, requestOptions)
  //     .map((res: Response) => {
  //       return res;
  //     })
  //     .catch((error: any) => {
  //       this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
  //       return Observable.throw(error);
  //     });
  // }

  // getBlob(url: string, body: string): Observable<any> {
  //   const requestOptions = this.getRequestOptionsBlob();
  //   return this.httpClient.get(url, {
  //     responseType: 'blob'
  //   })
  //     .map((res: Blob) => {
  //       return res;
  //     })
  //     .catch((error: any) => {
  //       this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
  //       return Observable.throw(error);
  //     });
  // }


  getRequestOptions() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Authorization', this.localStorageService.getItem('Authorization'));
    const requestOptions = {
      headers: headers
    };
    return requestOptions;
  }

  getRequestOptionsOfNode() {
    const headers = new HttpHeaders()
      // .set('Content-Type', 'application/json; charset=UTF-8')
      // .set('Access-Control-Allow-Origin', '*')
      .set('Accept', '*/*');
    const requestOptions = {
      headers: headers
    };
    return requestOptions;
  }


  // getRequestOptionsBlob() {
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json')
  //     .set('Authorization', this.localStorageService.getItem('Authorization'));

  //   const requestOptions = {
  //     headers: headers,
  //     method: RequestMethod.Get,
  //     ResponseType: ResponseContentType.Blob
  //   };
  //   return requestOptions;
  // }


  // getRequestOptionsPutBlob() {
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/vnd.brickfit.api.v1+json')
  //     .set('Authorization', this.localStorageService.getItem('Authorization'));
  //   const requestOptions = {
  //     headers: headers,
  //     method: RequestMethod.Put,
  //     ResponseType: ResponseContentType.Blob
  //   };
  //   return requestOptions;
  // }

  // getRequestOptionsPostBlob() {
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/vnd.brickfit.api.v1+json')
  //     .set('Authorization', this.localStorageService.getItem('Authorization'));
  //   const requestOptions = {
  //     headers: headers,
  //     method: RequestMethod.Post,
  //     ResponseType: ResponseContentType.Blob
  //   };
  //   return requestOptions;
  // }

  // postLoginRequest(url, body) {
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/x-www-form-urlencoded')
  //     .set('Accept', 'application/json')
  //     .set('Authorization', this.localStorageService.getItem('Authorization'));

  //   const requestOptions = {
  //     headers: headers
  //   };

  //   return this.httpClient.post(url, body, requestOptions)
  //     .map((res: Response) => {

  //       return res;
  //     })
  //     .catch((error: any) => {
  //       this.localStorageService.removeItem('Authorization');
  //       console.log(error.error);
  //       console.log(error);
  //       if (error.status === 400) {
  //         this.uiNotificationService.error(error.error.message, '');
  //       } else {
  //         this.uiNotificationService.error(this.translator.instant("common.error"), '');
  //       }
  //       // return Observable.throw(error.error);
  //       return Observable.throw(null);
  //     });
  // }

  getRequestOptionsWithoutAuthorization() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Accept', 'application/vnd.brickfit.api.v1+json');

    const requestOptions = {
      headers: headers
    };
    return requestOptions;
  }

  getWithoutAuthorization(url: string): Observable<any> {
    const requestOptions = this.getRequestOptionsWithoutAuthorization();

    return this.httpClient.get(url, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
    // .map((res: Response) => {
    //   return res;
    // })
    // .catch((error: any) => {
    //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
    //   return Observable.throw(error);
    // });
  }

  getNodeJsWithoutAuth(url: string): Observable<any> {
    const requestOptions = this.getRequestOptionsOfNode();

    return this.httpClient.get(url, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
  }

  putWithoutAuthorization(url: string, body: any): Observable<any> {
    const requestOptions = this.getRequestOptionsWithoutAuthorization();

    return this.httpClient.put(url, body, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
    // .map((res: Response) => {
    //   return res;
    // })
    // .catch((error: any) => {
    //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
    //   return Observable.throw(error);
    // });
  }

  putNodeJssWithoutAuth(url: string, body: any): Observable<any> {
    const requestOptions = this.getRequestOptionsOfNode();

    return this.httpClient.put(url, body, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
  }

  deleteNodeJssWithoutAuth(url: string): Observable<any> {
    const requestOptions = this.getRequestOptionsOfNode();

    return this.httpClient.delete(url, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
  }

  postWithoutAuthorization(url: string, body: any): Observable<any> {
    const requestOptions = this.getRequestOptionsWithoutAuthorization();

    return this.httpClient.post(url, body, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
    // .map((res: Response) => {
    //   return res;
    // })
    // .catch((error: any) => {
    //   this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
    //   return Observable.throw(error);
    // });
  }


  postNodeJssWithoutAuth(url: string, body: any): Observable<any> {
    const requestOptions = this.getRequestOptionsOfNode();

    return this.httpClient.post(url, body, requestOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error: any) => {
          this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
          return Observable.throw(error);
        })
      )
  }


  /////////////////

  // getrequestOptionsBlob() {
  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json');

  //   const requestOptions = {
  //     headers: headers,
  //     method: RequestMethod.Post,
  //     ResponseType: ResponseContentType.Blob
  //   };
  //   return requestOptions;
  // }

  // getblob(url: string, body: string): Observable<any> {

  //   const requestOptions = this.getrequestOptionsBlob();
  //   return this.httpClient.get(url, {
  //     responseType: 'blob'
  //   })
  //     .map((res: Blob) => {
  //       return res;
  //     })
  //     .catch((error: any) => {
  //       this.errorService.showError('Something went wrong.Please retry after sometime or contact Administrator.');
  //       return Observable.throw(error);
  //     });
  // }

}
