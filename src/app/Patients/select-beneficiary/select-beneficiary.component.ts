import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficiary } from 'src/app/models/beneficiary';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';

@Component({
  selector: 'app-select-beneficiary',
  templateUrl: './select-beneficiary.component.html',
  styleUrls: ['./select-beneficiary.component.scss']
})
export class SelectBeneficiaryComponent implements OnInit {

  id ! : number;
  newBen : Beneficiary = new Beneficiary();
  benList : Beneficiary[] = [];
  constructor(private benService : BeneficiaryService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.benService.getBeneficiaries(this.id).subscribe(
      (data) => {
        this.benList = data;
      },
      (Error) => {alert(Error.error.message)}
      )
      console.log(this.benList.length == 0);
  }
  


}
