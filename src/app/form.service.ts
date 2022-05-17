import { Injectable } from '@angular/core';
import { formdata } from './formdata';
import { Observable, of, throwError, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map ,retry} from 'rxjs/operators';








@Injectable({
  providedIn: 'root'
})
export class FormService {
  get(Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement) {
    throw new Error('Method not implemented.');
  }
  patchValue(arg0: { image: any; }) {
    throw new Error('Method not implemented.');
  }
  post(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://127.0.0.1:8080';



  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead  
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


 //get entire list

  getList(page:any) {    
    return this.http.get<any>(`${this.baseUrl}/list.php?page=`+page).pipe(
        catchError(this.handleError('getList', []))
      );
  }

  find(filter_stored:any) {
    console.log(filter_stored);
    return this.http.get<any>(`${this.baseUrl }/view.php?id=`+filter_stored)
    .pipe(
      catchError(this.handleError('find', []))
    );
  }
 

//update 

updateform(sendData: any): Observable<any> {
  
  let send = JSON.stringify(sendData);
  console.log("udpate working stringyfy",send);
  
  return this.http.post<any>(`${this.baseUrl}/update.php`,{ send: send }).pipe(
    catchError(this.handleError('updateform', []))
    
  );
  
}


// Delete
delete(sendObj: any): Observable<any> {
  let send = sendObj
  return this.http.post(`${this.baseUrl}/delete.php`,send).pipe(
    catchError(this.handleError('delete', []))
    
  );
  
}


getemail(page:any) {
  return this.http.get<any>(`${this.baseUrl}/gmailfetcher.php?page=`+page).pipe(
      catchError(this.handleError('getemail', []))
    );
   
}



//upload image
// public uploadFile(data:any) {
//   let uploadURL =(`${this.baseUrl}/upload.php`);
//   return this.http.post<any>(uploadURL, data);
// }
uploadFile(formData:any){
console.log('reached service')
  return this.http.post<any>(`${this.baseUrl}/index.php`, formData).pipe(
    catchError(this.handleError('uploadFile', []))
  );
}
}