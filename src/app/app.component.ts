import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Insuredmind';
 showlogbutton:boolean=true;
  constructor(){
    debugger;
    var loginuser=localStorage.getItem("username");
    if(loginuser!=null||loginuser!=undefined){
   // this.showlogbutton=false;
   this.showlogbutton=true;

    }
    else{
      this.showlogbutton=true;
    }
    if(window.location.pathname=="/Login"){
      this.showlogbutton=false;

    }
  }

  clickbutton(){
    this.showlogbutton=false;

  }
}
