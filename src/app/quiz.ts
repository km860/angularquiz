export class Quiz {
  constructor(
    private category: string,
    private type: string,
    private difficulty: string,
    private question: string,
    public correct_answer: string,
    public incorrect_answers: string[],

  ) {
  }
}
