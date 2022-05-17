
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  
  ckeditorContent:any;
  ckeConfig :any;
  Title:any;
  Content:any;
  agenda_data: any = FormGroup;
  constructor() { }
  
  ngOnInit(): void {
    
   this. ckeditorContent;
   this.ckeConfig = {    
    allowedContent: false,    
    extraPlugins: 'divarea',    
    forcePasteAsPlainText: true    
  };    
  }
  onSubmit(){
    
  }
}
