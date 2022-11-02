import { UserService } from './../services/user.service';
import { Subscription } from 'rxjs';
import { User } from './../models/user.models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  userSubscription:Subscription = new Subscription();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubjet.subscribe(
      (users:User[])=>{
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
