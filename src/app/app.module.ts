import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DpDatePickerModule} from 'ng2-date-picker';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { ListStudentsComponent } from './components/listar-estudiantes/list-students.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListExamsComponent } from './components/list-exams/list-exams.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentComponent,
    ListStudentsComponent,
    ListCoursesComponent,
    ListExamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    DpDatePickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
