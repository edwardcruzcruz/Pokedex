import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the HttpRequestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let HttpRequestProvider = class HttpRequestProvider {
    constructor(http, Http) {
        this.http = http;
        this.Http = Http;
    }
    post(url, data) {
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
            this.Http
                .post(url, data)
                .toPromise()
                .then((res) => {
                // Success
                resolve(res);
            }, err => {
                // Error
                reject(err);
            });
        });
        return promise;
    }
    get(url) {
        const promise = new Promise((resolve, reject) => {
            this.Http
                .get(url)
                .toPromise()
                .then((res) => {
                // Success
                resolve(res);
            }, err => {
                // Error
                reject(err);
            });
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
    patch(url, data) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        console.log('This is the email is going to be send to the back-end: ', data);
        const promise = new Promise((resolve, reject) => {
            this.http.patch(url, data, { headers: headers }).toPromise()
                .then((res) => {
                resolve(res);
            }, (error) => {
                reject(error);
            });
        });
        return promise;
    }
};
HttpRequestProvider = __decorate([
    Injectable()
], HttpRequestProvider);
export { HttpRequestProvider };
//# sourceMappingURL=http-request.js.map