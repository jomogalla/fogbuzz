import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.template.html'
})
export class AppComponent { 
  username: string = '';
  password: string = '';
  bro: string = 'hello';

  model = {username: '', password: ''};

  results: string = '';

  constructor (private apiService: ApiService) {}

  public logon(username: string, password: string) {
    debugger;
    results = this.apiService.logon(username, password);
  }
}
