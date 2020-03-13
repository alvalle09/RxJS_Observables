import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApicallService } from './apicall.service';
import { Country } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS-observable';
  name: string;
  countries: Country[];

  constructor(public http: HttpClient, private apiService: ApicallService ) {}

  searchCapital() {
    this.apiService
      .searchCountryByName(this.name)
      .subscribe((data: Country[]) => {
        console.log(data);
        this.countries = data;
      })
  }

}
