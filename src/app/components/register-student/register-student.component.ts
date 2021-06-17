import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  studentForm: FormGroup;
  title="crear Estudiante";
  ci:string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute,
              private studentService: StudentService) {
    this.studentForm = this.fb.group({
      ci:['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      carreraDeInteres: ['', Validators.required],
      //fecha:[new Date(2018,11,11)]
    });
    this.ci = this.aRoute.snapshot.paramMap.get('ci');
   }

  ngOnInit(): void {
    this.isEdit();
  }

  registerStudent(){
      const estudiante: Student = {
      nombre: this.studentForm.get('nombre')?.value.split("   ")[0],
      ci: parseInt(this.studentForm.get('ci')?.value),
      fechaDeNacimiento: this.studentForm.get('fechaNacimiento')?.value.split("   ")[0],
      carrera: this.studentForm.get('carreraDeInteres')?.value.split("   ")[0],
      //fecha: this.studentForm.get('fecha')?.value
    }
    console.log(estudiante);

    if(this.ci !== null){
      this.studentService.updateEstudiante(this.ci,estudiante).subscribe(data =>{
        this.toastr.success('El estudiante fue editado con exito','Estudiante editado');
        this.router.navigate(['/']);
      },error => {
        this.toastr.error('El estudiante no pudo ser editado','Operacion fallida');
        console.log(error);
        this.studentForm.reset();
        this.router.navigate(['/']);

      });
    } else {
      this.studentService.createEstudiante(estudiante).subscribe(data => {
        this.toastr.success('El estudiante fue registrado con exito','Estudiante registrado');
        this.router.navigate(['/']);
      },
      error => {
        this.toastr.error('El estudiante no pudo ser creado','Operacion fallida');
        console.log(error);
        this.studentForm.reset();
        this.router.navigate(['/']);

      });
    }
  }

  isEdit() {
    if(this.ci !== null) {
      this.title = "Editar Estudiante";
      this.studentService.getEstudiante(this.ci).subscribe(data=>{
        this.studentForm.setValue({
          ci:data.ci,
          nombre: data.nombre,
          fechaNacimiento: data.fechaDeNacimiento,
          carreraDeInteres: data.carrera
        });
      })
    }
  }

}
