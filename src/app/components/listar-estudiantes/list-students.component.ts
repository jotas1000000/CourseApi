import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService,
              private toastr:ToastrService) { }
  students: Student[] = [
/*     {
      ci: '123',
      nombre: 'Juan',
      fechaNacimiento:'11/09/1995',
      carreraDeInteres:'Vagancia',
    },
    {
      ci: '456',
      nombre: 'Pame',
      fechaNacimiento:'12/07/1995',
      carreraDeInteres:'TikToker',

    },
    {
      ci: '789',
      nombre: 'Stanis',
      fechaNacimiento:'21/03/1995',
      carreraDeInteres:'Pro Gamer',

    },
    {
      ci: '101',
      nombre: 'Yurguen',
      fechaNacimiento:'19/04/1995',
      carreraDeInteres:'Mega Senior Developer',

    } */
  ];
  ngOnInit(): void {
      this.getStudents();
  }

  getStudents(){
    this.studentService.getEstudiantes().subscribe(data => {
      //this.Estudiantes = data;
      this.students=data;
      console.log(data)
    }, error => {
      console.log(error);
      this.toastr.error('Hubo un problema o no existen datos','Error');
    
    });
  }
  deleteStudent(ci?: number){
    this.studentService.deleteEstudiante(ci).subscribe(data => {
      this.toastr.success('Estuadiante eliminado correctamente','Estudiante Eliminado');
      this.getStudents();
    },error => {
      console.log(error);
      this.toastr.error('Hubo un problema','No se Elimino el estudiante');
    });
  }
}
