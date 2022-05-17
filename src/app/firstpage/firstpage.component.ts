import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { BoxComponent } from '../box/box.component';
import { DataserveService } from '../dataserve.service';
import { FormService } from '../form.service';
import { formdata } from '../formdata';
import { Router,Routes } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  bankdetails: any = FormGroup;
  // uploadResponse:any;
  // file:any;
  fileToUpload:any;

  constructor(private formBuilder: FormBuilder,private matdialog:MatDialog ,public forms:FormService ,public router:Router
  ) { }

  ngOnInit(): void {


    this.bankdetails = this.formBuilder.group({
     customer_name: ['', [Validators.required]],
      bank_name: ['', [Validators.required]],
      branch_name: ['', [Validators.required]],
      account_number: ['', [Validators.required]],
      iban: ['', [Validators.required]],
      swift: ['', [Validators.required]],
      bank_address: ['', [Validators.required]],
      account_type:['', [Validators.required]],
      image:[]
    });
  }



   get BF() { return this.bankdetails.controls; }



call()
{
 console.log('call reached')
  // if (this.bankdetails.invalid) { return; }
        // this.submitLoader = true;
        console.log(this.bankdetails.value);

        let id_details_ = {customer_name: this.bankdetails.value.customer_name,  bank_name: this.bankdetails.value.bank_name, branch_name: this.bankdetails.value.branch_name,account_number:this.bankdetails.value.account_number, iban:this.bankdetails.value.iban,swift:this.bankdetails.value.swift,bank_address:this.bankdetails.value.bank_address,account_type:this.bankdetails.account_type,image:this.bankdetails.image};
   

        let id_details = JSON.stringify(id_details_);

       

        const formData = new FormData();
        formData.append('file', this.fileToUpload);
        // if (this.fileToUpload_2) { formData.append('file_2', this.fileToUpload_2); }
        // formData.append('APIKEY', this.read.APIKEY);
        formData.append('id_data', id_details);

        this.forms.uploadFile(formData).subscribe(Response => {
            // this.submitLoader = false;
            if (Response.status == 'success') {
              this.router.navigate(['/viewlist'])
              //   console.log("form created, ", formdata);
                // this.submit_done = true;
                // this.forms.openSnack('Document uploaded succesfully')
                // this.changer.emit(resc.id);
            }
        }, err => { console.log(err);});
    

  // this.forms.createFormdata(bankdetails).subscribe((formdata: formdata)=>{
  //   this.router.navigate(['/viewlist'])
  //   console.log("form created, ", formdata);
  // });

  
  //  let sed={ image:this.file,bankData:this.bankdetails }

  //   this.forms.createFormdata(sed).subscribe(
  //     (res) => {
  //       this.uploadResponse = res;
  //         console.log(res);
  //     },
  //     (err) => {  
  //       console.log(err);
  //     }
  //   );

  this.router.navigate(['/viewlist'])
}

  openBox() {
    const dialogRef = this.matdialog.open(BoxComponent, {
        minWidth: '500px',
        maxWidth: '65vh',
        disableClose: true,
        data: {  },
        closeOnNavigation: true,
         panelClass: 'custom-dialog-container-nopadding',
        
    });  
    
  


}


onFileSelect(event:any) {
//  this.file=event.target.files
    this.fileToUpload =event.target.files ? event.target.files[0]:'';
    this.bankdetails.patchValue({
      image:File
    })
    // this.bankdetails.get('image') ?.updateValueandValidity();
     console.log(this.fileToUpload);    
  }
}






function updateValueandValidity() {
  throw new Error('Function not implemented.');
}

function onFileSelect(event: Event | undefined, any: any) {
  throw new Error('Function not implemented.');
}

