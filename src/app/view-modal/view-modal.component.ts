import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataserveService } from '../dataserve.service';
import { FormService } from '../form.service';
import { formdata } from '../formdata';
import { Inject, Injectable} from  '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent implements OnInit {
  dataform:any
formdata : any = FormGroup;
 
  constructor(private formBuilder: FormBuilder,public formser:FormService  , @Inject(MAT_DIALOG_DATA) public data: any,public http:HttpClient,public dialogRef: MatDialogRef<ViewModalComponent>) { }

  ngOnInit(): void {
   console.log(this.data);
  // this.dataform=JSON.stringify(this.data);
  console.log(this.data);


  
  // this.formdata= this.formBuilder.group({
  //   customer_name: [this.data.customer_name],
  //    bank_name: [this.data.bank_name],
  
  //     account_number: [this.data.account_number],
  //     iban: [this.data.iban],
  //     swift: [this.data.swift],
  //    bank_address: [this.data.bank_address],
  //     account_type:[this.data.account_type]
  //  });

  }
  onDismiss(){
    this.dialogRef.close(false);


  }
}
