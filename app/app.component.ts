import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.template.html'
})
export class AppComponent { 
  public model = {username: '', password: ''};

  public results: string = ''; 

  constructor (private apiService: ApiService) {} 

  public logon(username: string, password: string) {
    this.apiService.logon(this.model.username, this.model.password)
      .then((response) => {
        this.results = response;
      });
  }
}
