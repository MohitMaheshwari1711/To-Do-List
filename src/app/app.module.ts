import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskedService } from './tasked.service';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
