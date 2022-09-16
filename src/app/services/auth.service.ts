
export class AuthService{
    isAuth = false;

    singIn(){
        return new Promise(
            (resolve, rejects)=>{
                setTimeout(
                    ()=>{
                        this.isAuth = true;
                        resolve(true);
                    }, 2000
                );
            }
        );
    }

    signOut(){
        this.isAuth = false;
    }
}