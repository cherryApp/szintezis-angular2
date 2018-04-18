import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder) {
    this.formGroup = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      age: [null, [Validators.required, Validators.min(18)]],
      job: [null],
      birthDate: [null, [this.checkDate]],
      password: [null, [Validators.pattern(/^[w0-9]{6,}$/), Validators.required]]
    });
  }

  checkDate(control: FormControl): boolean {
    if (!control.value) return false;
    return control.value.getFullYear() > 1999;
  }

  getGroupKeys(): Array<string> {
    return Object.keys(this.formGroup.controls);
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }

  ngOnInit() {
  }

}
