import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  constructor(private courseService: CourseService) { }

    Courses: Course[]= [/* 
    {
      nombre: 'Como hacer renegar',
      costo: '1000Bs',
      fechaInicio: '11/03/2021',
      profesor: 'Pame'
    },
    {
      nombre: 'Ser educado',
      costo: '200Bs',
      fechaInicio: '11/04/2021',
      profesor: 'Stanis'
    },
    {
      nombre: 'Ser responsable',
      costo: '300Bs',
      fechaInicio: '11/03/2021',
      profesor: 'Yurguen'
    },
    {
      nombre: 'Ser dormilon',
      costo: '200Bs',
      fechaInicio: '11/07/2021',
      profesor: 'Juan'
    } */
  ]

  ngOnInit(): void {
    this.getCourses();
  }


  getCourses(){
    this.courseService.getCourses().subscribe(data=>{
      console.log(data);
      this.Courses=data;
    }, error => {
      console.log(error);
    });
  }
}
