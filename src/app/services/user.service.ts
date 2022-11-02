import { Subject } from 'rxjs';
import { User } from "../models/user.models";

export class UserService{
    users:User[] = [
        {
            firstName:'Sylla', 
            lastName: 'Boubou',
            email: 'sylla@gmail.com',
            hobies:[
                'coca',
                'oasis'
            ]
        }
    ];
    userSubjet = new Subject<User[]>();
    emitUsers(){
        this.userSubjet.next(this.users.slice());
    }

    addUser(user:User){
        this.users.push(user);
        this.emitUsers();
    }
}