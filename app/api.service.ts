import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private fogbugzUrl = 'https://altsource.fogbugz.com/f/api/0/jsonapi';

    constructor (private http: Http) {}

    public logon(username: string, password: string) { 
        let body = {
            'cmd': 'logon',
            'username': username,
            'password': password
        }
        return this.http
            .post(this.fogbugzUrl, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('we had an error', error);
    }
}