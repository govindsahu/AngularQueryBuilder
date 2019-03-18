import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { QueryBuilderModule } from 'angular2-query-builder';
import {
  QueryBuilderComponent,
  QueryInputDirective,
  QueryFieldDirective,
  QueryEntityDirective,
  QueryOperatorDirective,
  QueryButtonGroupDirective,
  QuerySwitchGroupDirective,
  QueryRemoveButtonDirective,
  QueryEmptyWarningDirective,
  QueryArrowIconDirective
} from '../components';

@NgModule({
  declarations: [
    AppComponent,
    QueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    QueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
