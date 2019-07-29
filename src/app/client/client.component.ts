import { Component } from '@angular/core';

@Component({
    selector:'app-client',
    templateUrl:'client.component.html',
    styleUrls:[]
})
export class Client{

    username:String ="";
    usernameStaus :boolean = true;


    constructor(){
        if(this.username==''){
            this.usernameStaus = true;
        }
        else{
            this.usernameStaus = false;
        }
    }

    onResetbtn(){
        console.log("onResetbtn");
        this.username = "";
        if(this.username==''){
            this.usernameStaus = true;
        }
        else{
            this.usernameStaus = false;
        }

    }
}