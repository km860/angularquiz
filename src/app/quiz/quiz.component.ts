import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() quiz: Quiz;
  constructor() { }

  ngOnInit() {
  }

  getAnswers() {
    const answers = [];
    answers.push(this.quiz.correct_answer);
    this.quiz.incorrect_answers.forEach((q) => {
      answers.push(q);
    });
    console.log(this.quiz.incorrect_answers);
    return answers;
  }

}
