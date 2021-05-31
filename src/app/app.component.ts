import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week2';


  userData:any=[
    {name: "Sandra",addr:"Lagos",profile:"Developer"},
    {name: "Akash",addr:"Tokyo",profile:"Developer"},
    {name: "Rajan",addr:"Mumbasa",profile:"Developer"},
    {name: "Shashank",addr:"Ehiopia",profile:"Developer"},
    {name: "Sajan",addr:"Kigali",profile:"Developer"}
  ];

  constructor(){
    console.log(this.userData);
  }
}
;