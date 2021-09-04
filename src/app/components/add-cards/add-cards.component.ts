import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


interface wtype {
  value: string;
  viewValue: string;
}
interface ICompany {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css']
})
export class AddCardsComponent implements OnInit {

  wtypes: wtype[] = [
    { value: 'wtype-0', viewValue: 'Draw' },
    { value: 'wtype-1', viewValue: 'Paint' },
    { value: 'wtype-2', viewValue: 'Display' }
  ];


  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.createForm();
    // this.setChangeValidate()
  }


  createForm() {
    // let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'date': [null, Validators.required],
      'address': [null, Validators.required],
      'remark':[null,Validators.required],
      'premise': [null, Validators.required],
      'wtype': [null, Validators.required],
      'validate': '',
      'Company':[null, Validators.required],
    });
  }


  getErrorDate() {
    return this.formGroup.get('date').hasError('required') ? 'Field is required' : '';
  }
  getErrorAddress() {
    return this.formGroup.get('address').hasError('required') ? 'Field is required' : '';
  }

  getErrorPremise() {
    return this.formGroup.get('premise').hasError('required') ? 'Field is required' : '';
  }

  getErrorWtype() {
    return this.formGroup.get('wtype').hasError('required') ? 'Field is required' : '';
  }

  getRemark() {
    return this.formGroup.get('remark').hasError('required') ? 'Field is required' : '';
  }
  getCompany() {
    return this.formGroup.get('Company').hasError('required') ? 'Field is required' : '';
  }

  // setChangeValidate() {
  //   this.formGroup.get('validate').valueChanges.subscribe(
  //     (validate) => {
  //       if (validate == '1') {
  //         this.formGroup.get('Premise').setValidators([Validators.required, Validators.minLength(3)]);
  //         this.titleAlert = "You need to specify at least 3 characters";
  //       } else {
  //         this.formGroup.get('premise').setValidators(Validators.required);
  //       }
  //       this.formGroup.get('premise').updateValueAndValidity();
  //     }
  //   )
  // }



  // get name() {
  //   return this.formGroup.get('name') as FormControl
  // }

  // for Password Validation 

  // checkPassword(control) {
  //   let enteredPassword = control.value
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  // }

  // for email Check

  // checkInUseEmail(control) {
  //   // mimic http database access
  //   let db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }


  // for Email Error
  // getErrorEmail() {
  //   return this.formGroup.get('email').hasError('required') ? 'Field is required' :
  //     this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
  //       this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  // }





  // Error Message for oPassword
  // getErrorPassword() {
  //   return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
  //     this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  // }
  Company: ICompany[] = [
    { value: 'NC', viewValue: 'NorthCarolina' },
    { value: 'SC', viewValue: 'SouthCarolina' },   
  ];

  onSubmit(post) {
    this.post = post;
  }



}
