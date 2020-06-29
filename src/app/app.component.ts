import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  toggle: boolean = false;
  title: string = "Hello Tutor";
  age: Number = 20;
  userNames: Array<string> = ["Jabes", "Prince", "Vegeta"];
  users: Array<any> = [];
  user: any = {};
  as: any;
  selectedName: string;
  constructor() {
    this.addNumber()
  }

  addNumber(): Number {
    console.log("Add Number Function Invoked");
    return 4;
  }
  // Number function 

  changeToggle() {
    this.toggle = !this.toggle;
    // if (this.toggle === true) {
    //   this.toggle = false;
    // }
    // else {
    //   this.toggle = true;
    // }
  }

  userNameSelected(username: string) {
    console.log(username)
  }
}


