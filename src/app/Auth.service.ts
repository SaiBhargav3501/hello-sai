export class AuthService{
    loggedin:boolean=false;

    login(){
        this.loggedin=true
    }

    logout(){
        this.loggedin=false
    }

    isAuthenticated(){
        return this.loggedin
    }
} 