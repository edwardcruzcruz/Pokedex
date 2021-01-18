import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

/*
  Generated class for the HttpRequestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpRequestProvider {

  constructor(public http: HttpClient , public Http: Http)  {
  }
  

  public post(url : string , data : any){
    /*return new Promise((resolve, reject) => {
      this.Http.post(url, data)
        //.retryWhen(error => error.delay(20000))
        //.timeout(40000) 
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log("Error retry");
          reject(err);
        });
    });*/
    const promise = new Promise((resolve, reject) => {
      this.http
        .post(url,data)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  
  public get(url : string){
    const promise = new Promise((resolve, reject) => {
      this.http
        .get(url)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
    /*return new Promise((resolve, reject) => {
      this.Http.get(url)
        //.retryWhen(error => error.delay(2000))
        //.timeout(6000)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log("Error Retry");
          reject(err);
        });
    });*/
    
  }

  public patch(url: string, data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log('This is the email is going to be send to the back-end: ',data);
    const promise = new Promise( (resolve, reject) => {
      this.http.patch(url, data, {headers:headers}).toPromise()
        .then( (res) => {
          resolve(res);
        }, (error) => {
          reject(error);
        });
    });
    return promise;
  }

}
