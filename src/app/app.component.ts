import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz';
import { QuizService } from './quiz.service';

class Trivia {
  result_code: number;
  results: Quiz[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quiz: Quiz;
  quizList: Quiz[];
  constructor(private quizService: QuizService) {
  }
  ngOnInit() {
    this.quizService.getTrivia()
    .subscribe((trivia: Trivia) => {
      this.quizList = trivia.results;
    });
  }
}
