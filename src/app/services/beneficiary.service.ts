import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiary } from '../models/beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private httpClient : HttpClient) { }
  private baseUrl = "http://localhost:8080/api/v2/";
  //add a new beneficiary
  addBeneficiary(beneficiary : Beneficiary, id : number) : Observable<Beneficiary[]>{
    return this.httpClient.post<Beneficiary[]>(this.baseUrl+"/add-beneficiary/"+id, beneficiary);
  }
  //get beneficiaryList
  getBeneficiaries(id : number) : Observable<Beneficiary[]>{
    return this.httpClient.get<Beneficiary[]>(this.baseUrl+"/get-beneficiaries/"+id);
  } 
}
