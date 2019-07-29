import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Server } from './server/server.component';
import { Client } from './client/client.component';
import { MyDir } from './MyDir/mydir.component';


@NgModule({
  declarations: [
    AppComponent,
    Server,
    Client,
    MyDir
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
