import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title:String = 'First Angular App';

  headers: string[] = ["SERIAL NO.", "LANGUAGES", "FOUNDER", "F.YEAR", "DEVELOPMENT"];

  rows:any = [
    {
      "SERIAL NO." : "001",
      "LANGUAGES" : "Python",
      "FOUNDER" : "Guido van Rossum",
      "F.YEAR" : "1989",
      "DEVELOPMENT" : "Front-end/Back-end"
    },
    {
      "SERIAL NO." : "002",
      "LANGUAGES" : "Java",
      "FOUNDER" : "James Gosling",
      "F.YEAR" : "1995",
      "DEVELOPMENT" : "Back-end"
    },
    {
      "SERIAL NO." : "003",
      "LANGUAGES" : "C++",
      "FOUNDER" : "Bjarne Stroustrup",
      "F.YEAR" : "1979",
      "DEVELOPMENT" : "Back-end"
    },
    {
      "SERIAL NO." : "004",
      "LANGUAGES" : "NodeJS",
      "FOUNDER" : "Ryan Dahl",
      "F.YEAR" : "2009",
      "DEVELOPMENT" : "Front-end/Back-end"
    },
    {
      "SERIAL NO." : "005",
      "LANGUAGES" : "Angular",
      "FOUNDER" : "Miško",
      "F.YEAR" : "2009",
      "DEVELOPMENT" : "Front-end"
    },
    {
      "SERIAL NO." : "006",
      "LANGUAGES" : "HTML",
      "FOUNDER" : "Tim Berners-Lee",
      "F.YEAR" : "1993",
      "DEVELOPMENT" : "Front-end"
    },
    {
      "SERIAL NO." : "007",
      "LANGUAGES" : "Ruby",
      "FOUNDER" : "Yukihiro Matz Matsumoto",
      "F.YEAR" : "1995",
      "DEVELOPMENT" : "Front-end/back-end"
    },
    {
      "SERIAL NO." : "008",
      "LANGUAGES" : "Elasticsearch",
      "FOUNDER" : "Shay Banon",
      "F.YEAR" : "2010",
      "DEVELOPMENT" : "Distributed search and Analytics"
    }
  ]

}
