import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  Reactiveformcontrol:FormBuilder|any;
  submitted = false;


  ngOnInit(): void {
    this.Reactiveformcontrol=this.formBuilder.group({
      Name:['',Validators.required],
      Address:['',Validators.required,Validators.maxLength(13)]
    })
  }

  get form(){return this.Reactiveformcontrol.controls}

  OnSubmit(){
    this.submitted = true;

      if (this.Reactiveformcontrol.invalid) {
          return;
      }
    }
  

}
