import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  
  profileForm:FormBuilder | any
  issubmit:boolean=false;

  registerForm: FormGroup|any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {

  this.registerForm = this.formBuilder.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
}, {
    validator: this.MustMatch('password', 'confirmPassword')
});
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
   
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
   MustMatch(arg0: string, arg1: string): any {
   // alert("ll")
  }
  

}


