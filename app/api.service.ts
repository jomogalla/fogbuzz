import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ApiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private fogbugzUrl = 'https://altsource.fogbugz.com/f/api/0/jsonapi';

    constructor (private http: Http) {}

    login(username: string, password: string): Promise<AuthenticationToken> {
        return this.http
            .post('logon', username, string)
            .toPromise()
            .then(response = response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('we had an error', error);
    }
}