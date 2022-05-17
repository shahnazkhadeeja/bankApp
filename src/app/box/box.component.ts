import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataserveService } from '../dataserve.service';
import { FormService } from '../form.service';
import { formdata } from '../formdata';
import { Inject, Injectable} from  '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-box',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  
})
export class BoxComponent implements OnInit {
  // dialogData: DialogData;


formdata:any;
//[{
//     customer_name:null ,
//         bank_name: null ,
//         branch_name: null ,
//         account_number:null ,
//         iban: null ,
//         swift: null ,
//         bank_address:  null,
//         account_type:null
//    }]
   
  

  constructor( public formser:FormService  , public http:HttpClient,public dialogRef: MatDialogRef<BoxComponent>,) { }
 
  ngOnInit(): void {
    // this.readFromdata();
  }


  onSuccess(){

    this.dialogRef.close(true);

  }
  onDismiss(){
    this.dialogRef.close(false);


  }
}
