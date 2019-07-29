import { Component } from '@angular/core';

@Component({
    selector:'app-myDir',
    templateUrl:'mydir.component.html',
    styleUrls:[]
})
export class MyDir{

    mytextdata :String ="SRCRET PASSWORD IS 'RAVI'";
    myItemList = [];
    count :number = 1;
    showdataorNot:boolean = true;

    constructor(){
       
    }

    onAddItemToList(){
        if(this.count==1){
            this.showdataorNot = false;
        }else{
            this.showdataorNot = true;
        }
        if(this.count === 6){
            this.myItemList = [];
            this.count = 1;
        }
        this.myItemList.push(this.count);
        this.count = this.count+1;
       
    }


    getColor(){
        console.log("getColor");
        return this.count === 6 ? "green" :"white";
    }
}