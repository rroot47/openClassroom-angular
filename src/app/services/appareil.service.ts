import { Subject } from 'rxjs';
export class AppareilService{

  appareilsSubject = new Subject<any[]>();
  private  appareils = [
        {
          id:1,
          name : 'PC',
          status : 'allumé'
        },
        { 
          id:2,
          name : 'Machine à laver',
          status : 'éteint'
        },
        {
          id:3,
          name : 'Television',
          status : 'allumé'
        }
      ];

emitappareilsSubject(){
  this.appareilsSubject.next(this.appareils.slice());
}
      allumeTout(){
        for(let ap of this.appareils){
            ap.status = 'allumé';
        }
        this.emitappareilsSubject();
      }
      eteintTout(){
        for(let ap of this.appareils){
            ap.status = 'éteint';
        }
        this.emitappareilsSubject();
      }

      allumeUn(index:number){
        this.appareils[index].status = 'allumé'
        this.emitappareilsSubject();
      }
      eteintUn(index:number){
        this.appareils[index].status = 'éteint'
        this.emitappareilsSubject();
      }

      getById(id:number){
        const app = this.appareils.find(
            (appareil)=>{
               return appareil.id ===id; 
            }
        );
        return app;
      }

      saveAppareil(name:string, status:string){
        const newAppareil = {
          id:0,
          name:'',
          status:''
        }
        newAppareil.name = name;
        newAppareil.status = status;
        newAppareil.id = this.appareils[(this.appareils.length-1)].id +1;
        this.appareils.push(newAppareil);
        this.emitappareilsSubject();
      }
}