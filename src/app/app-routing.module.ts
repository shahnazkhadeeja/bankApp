import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { HomeComponent } from './home/home.component';
import { MailComponent } from './mail/mail.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { TextEditor2Component } from './text-editor2/text-editor2.component';


const routes: Routes = [

  
      {
        path: '',
        component: HomeComponent,

      },
      {
        path: 'firstpage',
        component: FirstpageComponent,

      },
      {
        path: 'viewlist',
        component: ViewlistComponent,

      },

      {
        path: 'updatelist',
        component: UpdatelistComponent,

      
  },
  {
    path: 'mail',
    component: MailComponent,

  },

  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'survey',
    component: SurveyComponent,

  },
  {
    path: 'editor',
    component: TextEditor2Component,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









