import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string =''; //propriete personnaliser
  @Input() appareilStatus : string = '';
 // appareilName = 'PC';
  //appareilStatus = 'Eteint';
  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }
  getColor(){
    if(this.appareilStatus === "allumé"){
      return 'green';
    }else if(this.appareilStatus === "éteint"){
      return "red";
    }
    return;
  }
}
