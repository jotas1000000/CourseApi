import { Component, OnInit } from '@angular/core';
import { Exam } from '../../models/exam';
import { ExamService} from '../../services/exam.service';
@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {

  constructor(private examService:ExamService) { }

  Exams: Exam[]=[/* 
    {
      "id": 2,
      "career": "Ingenieria de Sistemas",
      "course": "Base de Datos",
      "dateExam": "2021-06-14 04:00:00",
      "faculty": "San Simon",
      "period": "2021",
      "semester": 1
  },
  {
      "id": 3,
      "career": "Ingenieria de Sistemas",
      "course": "Ingenieria Software",
      "dateExam": "2021-06-17 04:00:00",
      "faculty": "San Simon",
      "period": "2021",
      "semester": 1
  },
  {
      "id": 1,
      "career": "Administracion",
      "course": "Administracion 1",
      "dateExam": "2021-06-17 04:00:00",
      "faculty": "Catolica",
      "period": "2021",
      "semester": 1
  },
  {
      "id": 4,
      "career": "Administracion",
      "course": "Economia General",
      "dateExam": "2021-06-20 04:00:00",
      "faculty": "Catolica",
      "period": "2021",
      "semester": 1
  },
  {
      "id": 5,
      "career": "Ingenieria Informatica",
      "course": "Economia General",
      "dateExam": "2021-08-02 04:00:00",
      "faculty": "Catolica",
      "period": "2021",
      "semester": 2
  },
  {
      "id": 6,
      "career": "Ingeniería en Tecnologías de la Información y Comunicaciones",
      "course": "Informática y computación",
      "dateExam": "2021-08-06 04:00:00",
      "faculty": "Ucatec",
      "period": "2021",
      "semester": 2
  },
  {
      "id": 7,
      "career": "Ingeniería en Tecnologías de la Información y Comunicaciones",
      "course": "Ciencias Exactas",
      "dateExam": "2021-08-06 04:00:00",
      "faculty": "Ucatec",
      "period": "2021",
      "semester": 2
  },
  {
      "id": 8,
      "career": "Ingeniería en Tecnologías de la Información y Comunicaciones",
      "course": "Administracion",
      "dateExam": "2021-08-07 04:00:00",
      "faculty": "Ucatec",
      "period": "2021",
      "semester": 2
  },
  {
      "id": 9,
      "career": "Ingeniería Electromecánica",
      "course": "Mecánica",
      "dateExam": "2021-08-01 04:00:00",
      "faculty": "Catolica",
      "period": "2021",
      "semester": 2
  },
  {
      "id": 10,
      "career": "Medicina",
      "course": "Fisiología",
      "dateExam": "2021-08-01 04:00:00",
      "faculty": "San Simon",
      "period": "2021",
      "semester": 2
  } */
  ];
  
  ngOnInit(): void {
    this.getExams();
  }

  getExams(){
    this.examService.getExams().subscribe(data => {
      this.Exams=data;
      console.log(data);
    }, error => {
      console.log(error)
    });
  }

}
