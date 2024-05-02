import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideDatabase(() => getDatabase()),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
