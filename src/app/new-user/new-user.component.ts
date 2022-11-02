import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.models';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup|any
  constructor(private formBuilder:FormBuilder, 
    private userService:UserService,
    private route:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
      this.userForm  = this.formBuilder.group({
        firstName:['', Validators.required], 
        lastName: ['', Validators.required],
        email: ['', Validators.required, Validators.email]
      });
  }

  onSubmit(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email']
    );
    this.userService.addUser(newUser);
    this.route.navigate(['/users']);
  }

}
