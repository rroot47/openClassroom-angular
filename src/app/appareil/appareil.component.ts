import { Component, OnInit,Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string =''; //propriete personnaliser
  @Input() appareilStatus : string = '';
  @Input() indexOfAppareil : number = 0;
  @Input() id:number = 0;
 // appareilName = 'PC';
  //appareilStatus = 'Eteint';
  constructor(private appareilService:AppareilService) { }

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
  allumeUn(){
    this.appareilService.allumeUn(this.indexOfAppareil);
  }

  eteintUn(){
    this.appareilService.eteintUn(this.indexOfAppareil);
  }
}
