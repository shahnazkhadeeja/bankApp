import { Component, OnInit, Injectable, NgModule, ViewChild } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BoxComponent } from '../box/box.component';
import { UpdatelistComponent } from '../updatelist/updatelist.component';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { ViewModalComponent } from '../view-modal/view-modal.component';





@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})

export class ViewlistComponent implements OnInit {

  bankdata: any;
  resultsLength: any = 0
  page: any = 0


  constructor(public forms: FormService, public router: Router, private matdialog: MatDialog) {
    this.bankdata = [];


  }
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.readFromdata();

  }
  readFromdata() {

    this.forms.getList(this.page).subscribe(response => {

      this.bankdata = response.result;
      this.resultsLength = response.count;
      

    })

  }

  paginate() {
    this.page = this.paginator.pageIndex
    this.page + 1
    this.readFromdata()
  }


  delete(id: any): void {
    let senData = { id: id}
    const dialogRef = this.matdialog.open(BoxComponent, {
      // minWidth: '500px',
      maxWidth: '350px',
      disableClose: true,
      data: {},
      closeOnNavigation: true,
      panelClass: 'my-dialog',


    });
    dialogRef.afterClosed().subscribe(dialogResult => {

      console.log(dialogResult);
      if (dialogResult) {

        this.forms.delete(senData).subscribe(
          response => {
            if (response.status == 'success') {
              this.readFromdata();
            }
          },
          error => {
            console.log(error);
          });

      }

    });
  }

  view(item:any){
   let send= {customer_name: item.customer_name,  bank_name: item.bank_name, branch_name: item.branch_name,account_number:item.account_number, iban:item.iban,swift:item.swift,bank_address:item.bank_address,account_type:item.account_type,image:item.image};
   
    const dialogRef = this.matdialog.open(ViewModalComponent, {
      minWidth: '800px',
      maxWidth: '500px',
      disableClose: true,
      data: send,
      closeOnNavigation: true,
      panelClass: 'my-dialog',


    });
console.log(send);

  }
}
  //   let senData={ id:id }
  //   if(confirm("Are you sure to delete "+id))
  //   this.forms.delete(senData).subscribe(
  //     response => {
  //       if(response.status=='success'){
  //         this.readFromdata();
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }
