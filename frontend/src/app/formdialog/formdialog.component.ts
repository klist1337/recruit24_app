import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';
@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrl: './formdialog.component.css'
})
export class FormdialogComponent {
  formValue = this.fb.nonNullable.group({
    companyName: '',
    jobTitle : "", 
    country_State : "", 
    year_wages : "",
    years_require_experience : "",
    job_description : "",
    job_location : "",
    company_description : "",
    responsabilities : "",
    requirements_for_role : "",
    start_date : ['', Validators.required],
    posting_date : "", 
  });
  
  
  constructor(private fb: FormBuilder, 
    private fetch:FetchDataService) {}
  onSubmit() {
    if(this.formValue.valid) {
      this.fetch.submitForm(this.formValue.value).subscribe({
        next : (response) => {
          console.log("succes");
        }
      })
    }
    window.location.reload();
  }
}
