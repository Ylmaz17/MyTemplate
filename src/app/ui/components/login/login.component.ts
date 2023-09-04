import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();

  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      checkbox1: [true]
    })
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe({
        next: (response) => {
          this.toastrService.info(response.message)
          if (this.loginForm.value.checkbox1 == true) {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("role", response.data.roles)
          }
        },
        error: (responseError) => {
          this.validationClass()
          this.toastrService.error(responseError.error)
        }
      });
    }
  }
  validationClass(){
    if(this.loginForm.valid){
      return 'valid-feedback'
    }
    else{
      return 'invalid-feedback'
    }
  }
  get email():FormControl{
    return this.loginForm.get("email") as FormControl
  }
}
