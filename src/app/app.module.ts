import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatButtonModule} from '@angular/material/button';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { BoxComponent } from './box/box.component';
import  {HttpClientModule} from '@angular/common/http';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MailComponent } from './mail/mail.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ViewModalComponent } from './view-modal/view-modal.component'
import {MatListModule} from '@angular/material/list';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TextEditor2Component } from './text-editor2/text-editor2.component';
// import { QuillModule } from 'ngx-quill'





const modules = [

  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
 
];

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    BoxComponent,
    ViewlistComponent,
    UpdatelistComponent,
    HomeComponent,
    NavbarComponent,
    MailComponent,
    ViewModalComponent,
    SurveyComponent,
    LoginComponent,
    TextEditor2Component,
    
    
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    CKEditorModule,
    // QuillModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
