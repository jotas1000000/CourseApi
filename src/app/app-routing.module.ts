import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListStudentsComponent } from './components/listar-estudiantes/list-students.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListExamsComponent } from './components/list-exams/list-exams.component';

const routes: Routes = [
  {path:'', component: ListStudentsComponent},
  {path:'crear-estudiante', component: RegisterStudentComponent},
  {path:'editar-estudiante/:ci', component: RegisterStudentComponent},
  {path:'listar-cursos', component: ListCoursesComponent},
  {path:'listar-examenes', component: ListExamsComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
