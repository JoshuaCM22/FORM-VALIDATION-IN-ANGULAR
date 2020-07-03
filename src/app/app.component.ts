import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  title = "reactive-form-validation-in-angular8";

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      tnc: ["", Validators.required],
    });
  }

  get fval() {
    return this.registerForm.controls;
  }

  signUp() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert("Form is successfully validated!");
  }
}
