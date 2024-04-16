import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';

interface PostInfo {
  companyName: string,
  jobTitle: string,
  Country_State: string,
  year_wages: string ,
  years_require_experience: string ,
  job_description: string,
  job_location: string,
  company_description: string,
  responsibilities: string,
  requirements_for_role: string,
  start_date: string ,
  posting_date: string, 

};

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.css'
})
export class AddNewPostComponent {
  addjob =  false;

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
  onClick() {
    this.addjob = !this.addjob;
  }
  onSubmit() {
    if(this.formValue.valid) {
      this.fetch.submitForm(this.formValue.value).subscribe({
        next : (response) => {
          console.log("succes");
        }
      })
    }
  }
}
