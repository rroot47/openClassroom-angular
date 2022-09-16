import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

appareils : any[] = [];
update = new Date();

constructor(private appareilService:AppareilService){
  setTimeout(
    ()=>{
      this.isAuth = true;
    },2000
  )
}
ngOnInit(): void {
  this.appareils = this.appareilService.appareils;
}
onAllumer(){
  this.appareilService.allumeTout();
}
onEteint(){
this.appareilService.eteintTout();
}
}
