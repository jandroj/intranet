import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarComponent } from './persona/listar/listar.component';
import { AddComponent } from './persona/add/add.component';
import { EditComponent } from './persona/edit/edit.component';
import { InicioComponent } from './persona/inicio/inicio.component';
import{ServiceService}from '../app/service/service.service';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app.routing.module';
import{HttpClientModule}from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule,MatSlideToggleModule,BrowserAnimationsModule,Router,CommonModule ],
  declarations: [ AppComponent,ListarComponent,
    AddComponent,
    InicioComponent ,
    EditComponent ],
   
    providers: [ServiceService],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
