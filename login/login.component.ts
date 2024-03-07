import { Component, ViewChild  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',  
  standalone: true,
  imports: [FormsModule],
  providers: [NgForm],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('myForm')
  form!: NgForm;


  onSubmit() {
    console.log('Form submitted!');
    console.log('Form validity:', this.form.valid);
    console.log('Form touched:', this.form.touched);
    console.log('Form untouched:', this.form.untouched);
    console.log('Form errors:', this.form.errors);
    console.log('First name validity:', this.form.controls['fName'].valid);
    console.log('Last name validity:', this.form.controls['lName'].valid);
    console.log('Email validity:', this.form.controls['email'].valid);
  }
}
