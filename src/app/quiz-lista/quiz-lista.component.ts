import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-lista',
  templateUrl: './quiz-lista.component.html',
  styleUrls: ['./quiz-lista.component.css']
})
export class QuizListaComponent implements OnInit {

  @Input() quizList: Quiz[];

  constructor() { }

  ngOnInit() {
  }
}
