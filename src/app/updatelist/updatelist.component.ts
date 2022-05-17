import { Component, OnInit } from '@angular/core';
import { formdata } from '../formdata';
import { FormService } from '../form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { getMaxListeners } from 'process';

@Component({
  selector: 'app-updatelist',
  templateUrl: './updatelist.component.html',
  styleUrls: ['./updatelist.component.css']
})
export class UpdatelistComponent implements OnInit {

  id: any = '';
  data: any;
  message = "";
  bankupdate: any = FormGroup;
  filter_stored:any={}

  constructor(public formservice: FormService, public activateroute: ActivatedRoute,public router: Router, private formBuilder: FormBuilder) {
 this.data=[];

  }
  //'count'=>$count['count']

  ngOnInit(): void {

    this.activateroute.queryParams.subscribe(params => { this.filter_stored = params; })
    ;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;


    this.formservice.find(this.filter_stored.id).subscribe(response => {       
      this.data = response.result;      
      this.bankupdate= this.formBuilder.group({
        customer_name: [this.data.customer_name, [Validators.required]],
         bank_name: [this.data.bank_name, [Validators.required]],
        //  branch_name: [this.data.branch_name, [Validators.required]],
          account_number: [this.data.account_number, [Validators.required]],
          iban: [this.data.iban, [Validators.required]],
          swift: [this.data.swift, [Validators.required]],
         bank_address: [this.data.bank_address, [Validators.required]],
          account_type:[this.data.account_type, [Validators.required]]
       });

    })
   

  }




  get BF() { return this.bankupdate.controls; }
  update() {
    
    console.log(this.BF.customer_name.value)
    let sendData= { customer_name : this.BF.customer_name.value,
                        bank_name : this.BF.bank_name.value,
                        account_number:this.BF.account_number.value,
                        bank_address:this.BF.bank_address.value,
                        iban:this.BF.iban.value,
                        account_type:this.BF.account_type.value,
                        swift:this.BF.swift.value,
                        id:this.filter_stored.id

                        }
//  console.log(sendData);
    //Update item by taking id and updated data object
  let id=this.filter_stored ;
  
  
    this.formservice.updateform( sendData).subscribe(response => {
      // console.log('updated record is:',sendData,this.filter_stored);
      
      this.router.navigate(['viewlist']);
    })
    
  }




}
