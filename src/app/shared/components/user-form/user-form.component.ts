import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user:User;
  UserForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.value;
   }
   private isEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/;
  ngOnInit(): void {
    this.initForm();
    if (typeof this.user === 'undefined') {
      // Redirect
      this.router.navigate(['user-new']);
    } else {
      this.UserForm.patchValue(this.user);
    }
  }

  onSave():void {
    console.log("Saved: ", this.UserForm.value);
  }

  onGoBackToList(): void {
    this.router.navigate(['user-list']);
  }
  private initForm():void {
    this.UserForm = this.fb.group({
      ci: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      direccion: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]]
    })
  }

}
