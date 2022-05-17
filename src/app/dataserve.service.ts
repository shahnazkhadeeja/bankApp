import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserveService  {
 namedatas= [{
  customer_name:"" ,
      bank_name: "" ,
      branch_name: "" ,
      account_number:"" ,
      iban: "" ,
      swift: "" ,
      bank_address:  "",
      account_type:""
 }
 ]


      getInfo(){
        return this.namedatas;
        
      }
      public call(namedata:any) {  
        console.log("Full Name : " + namedata.customer_name);  
        console.log("Email Id : " + namedata.bank_name); 
        this.namedatas.push(namedata);
        console.log(namedata);
     }  

  constructor() { }
}
