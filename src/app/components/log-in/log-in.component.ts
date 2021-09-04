import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services'
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  loginForm: FormGroup;

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private router: Router, fb: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService

  ) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }

  }

  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  get fcontrol() { return this.loginForm.controls; }
  submit() {
    // console.log(this.loginForm.value);
    // this.router.navigateByUrl('dashboard');
    this.submitted = true;
    console.log('Log in ');
    console.log('form value   '+ this.fcontrol.email.value);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.fcontrol.email.value, this.fcontrol.password.value)
        .pipe(first())
        .subscribe(
            data => {

              console.log('return url ',this.returnUrl)
                this.router.navigate([this.returnUrl]);

            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

}
