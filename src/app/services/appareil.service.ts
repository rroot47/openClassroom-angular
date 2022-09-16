export class AppareilService{
    appareils = [
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
      ]

      allumeTout(){
        for(let ap of this.appareils){
            ap.status = 'allumé';
        }
      }
      eteintTout(){
        for(let ap of this.appareils){
            ap.status = 'éteint';
        }
      }

      allumeUn(index:number){
        this.appareils[index].status = 'allumé'
      }
      eteintUn(index:number){
        this.appareils[index].status = 'éteint'
      }

      getById(id:number){
        const app = this.appareils.find(
            (appareil)=>{
               return appareil.id ===id; 
            }
        );
        return app;
      }
}