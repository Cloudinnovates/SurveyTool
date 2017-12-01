import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SurveylistService } from '../surveylist.service';

@Component({
  selector: 'app-questionpanel',
  templateUrl: './questionpanel.component.html',
  styleUrls: ['./questionpanel.component.css']
})
export class QuestionpanelComponent implements OnInit, OnChanges {

  // Listener for event emitter fired when user clicks on a survey in the left column
  @Input() survey: any;
  showIcons: boolean = true;
  editQuestionType: string;
  tempQuestionOption: string[] = [" "];
  tempRatings: string[] = [" "];
  questionToEdit:any = {
    label: '', 
    type: '', 
    options: {
      hideQuestion: '', 
      responseRequired: '', 
      padding: '', 
      color: '', 
      align: '', 
      questionOptions: [],
      ratings: []
    }
  };
  constructor(private surveylistService: SurveylistService) {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }

  // Adjust style settings for individual question
  adjustQuestionSettings(question) {
    this.questionToEdit = question;
    this.editQuestionType = question.type;
  }

  addQuestionToSurvey($event) {
    this.surveylistService.addQuestionToSurvey(this.survey.id, $event.dragData);
  }

  // Delete a question from a survey
  deleteQuestion(survey, question) {
      this.surveylistService.deleteQuestion(survey, question);
  }

  // This is a hacky solution to fix my problem with adding radio, checkbox, and grid question options
  addQuestionOption() {
    this.tempQuestionOption.push(" ");
  }

  // This is a hacky solution to fix my problem with adding grid rating options
  addRatingOption() {
    this.tempRatings.push(" ");
  }

  // Temporary method for testing data binding
  saveQuestionSettings() {
    console.log(this.questionToEdit.options);
  }
}
