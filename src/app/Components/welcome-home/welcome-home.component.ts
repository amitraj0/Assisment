import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.css']
})
export class WelcomeHomeComponent implements OnInit {

  constructor() { }
  image:any=[];

  ngOnInit(): void {
   //As we don't have a dynamic array writing this code 
    for(var i=1;i<6;i++){
      this.image.push("../../../assets/"+i+".jpg")

    }
  }

}
