
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
//import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

secondes: number = 0;
counterSubscription : Subscription = new Subscription();
  constructor(){}

  ngOnInit(){
    const counter = (period : any) => new Observable(observer => {
          let i = 0;
          const handler = setInterval(() => observer.next(i++), period);
          return () => clearInterval(handler);
      });
    const data$ = counter(1000);
    // data$.subscribe(
    //   (value:unknown | any)=>{
    //     this.secondes = value;
    //   },(err:any)=>{
    //     console.log("Une erreur est rencontré!:"+err)
    //   },
    //   ()=>{
    //     console.log("Observable complété!!")
    //   }
    // );
    this.counterSubscription = data$.subscribe(
      (v:any)=>{
        this.secondes = v;
      }
    )
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
