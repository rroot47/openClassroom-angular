import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name : string | any = 'Appareil';
  status : string | any  = 'Status';

  constructor(private appareilService:AppareilService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   const id = this.name = this.route.snapshot.params['id'];
   this.name = this.appareilService.getById(+id)?.name;
   this.status = this.appareilService.getById(+id)?.status;
  }

}
