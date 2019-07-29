import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'server.component.html',
    styleUrls:[]
})
export class Server{

    serverStaus:boolean = false;
    serverStatusString ="Server is not created";
    listStatus = true;
    serverName = 'TestServer';
    serverCreated = false;

    MyListObjects = [
        "Angular 8",
        "Javascript",
        "TypeScript",
        "Javascript",
        "NodeJS",
        "Express",
        "MongoDB"
    ];
    constructor(){
        setInterval(()=>{
            this.serverStaus = true;
        },2000);
    }


    onCreateServer(){
        console.log("onCreateServer");
        this.serverCreated = true;
        this.serverStatusString = "Server is created now, with the name is "+this.serverName;
    }

    onshowHide(){
        if(this.listStatus == false){
            this.onhideList();

        }
        else if(this.listStatus == true){
            this.onShowList();
        }
    }

    onShowList(){
        console.log("onShowList");
        this.listStatus = false;
    }

    onhideList(){
        console.log("onhideList");
        this.listStatus = true;
    }

    onUpdateServer(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}