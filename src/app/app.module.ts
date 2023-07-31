import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { TasksComponent } from './MyComponents/tasks/tasks.component';
import { AddTaskComponent } from './MyComponents/add-task/add-task.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { TaskdetailsComponent } from './MyComponents/taskdetails/taskdetails.component'
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { taskReducer } from './MyComponents/state/task.reducer';
import { TaskEfefcts } from './MyComponents/state/task.effect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    AddTaskComponent,
    TaskdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    StoreModule.forRoot({task: taskReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([TaskEfefcts]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
