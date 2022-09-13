import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isAuth = false;
appareils = [
  {
    name : 'PC',
    status : 'allumé'
  },
  {
    name : 'Machine à laver',
    status : 'éteint'
  },
  {
    name : 'Television',
    status : 'allumé'
  }
]
update = new Date()

updateAsyn = new Promise(
  (resolve, rejects) =>{
   const date = new Date();
   setTimeout(
    ()=>{
      resolve(date);
    }, 2000
   ); 
  }
);

constructor(){
  setTimeout(
    ()=>{
      this.isAuth = true;
    },2000
  )
}
onAllumer(){
  console.log("Tout est allumer!!");
}
}
