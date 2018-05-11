import { Injectable } from '@angular/core';
import { Quiz } from './quiz';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  quizList: Quiz[];

  constructor(private http: HttpClient) { }

  getTrivia() {
    /* const quiz = new Quiz(
      'Kategori',
      'typ',
      'diff',
      'fråga1',
      'svaret',
      ['fel1', 'fel2'],
    );
    this.quizList = [quiz];
    return this.quizList; */
    const url = 'https://opentdb.com/api.php?amount=10';
    return this.http.get(url);
  }
}
