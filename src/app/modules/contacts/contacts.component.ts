import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup, 
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  contactForm: FormGroup|any;
  matcher = new MyErrorStateMatcher();

  constructor(private snackBar: MatSnackBar) {
    this.contactForm = new FormGroup({
      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      nameFormControl : new FormControl('', [Validators.required])
    });
  }

  showSuccessMessage(form: NgForm){
    if (this.emailFormControl.valid&&this.nameFormControl.valid) {
      console.log(this.emailFormControl.valid&&this.nameFormControl.valid)
      this.snackBar.open('Your message sent successfully', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
    } else {
      this.snackBar.open('Please fill in all the fields', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }}
}
