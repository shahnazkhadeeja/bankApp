import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  emaildata: any;
  page: any = 0
  loader: boolean = false
  resultsLength: any = 0

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;


  constructor(public forms: FormService, public router: Router) {
    this.emaildata = [];
  }

  ngOnInit(): void {
    this.readEmail();
  }

  readEmail() 
  {
    this.loader = true

    
    this.forms.getemail(this.page).subscribe(response => {
      this.loader = false

      this.emaildata = response.output;
      this.resultsLength = this.emaildata.length
  console.log(this.resultsLength);

    })
  }


  paginate() 
  {

    this.page = this.paginator.pageIndex
    this.page + 1
    this.readEmail()
  }





}
