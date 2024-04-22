import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';
import { ToastrService } from 'ngx-toastr';
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
    private fetch:FetchDataService, private toastr:ToastrService) {}
  onSubmit() {
    if(this.formValue.valid) {
      this.fetch.submitForm(this.formValue.value).subscribe({
        next : (response) => {
          console.log("succes");
        }
      })
    }
    this.showSuccessMsg();
    this.clearinput();
    
  }
  showSuccessMsg() {
    this.toastr.success('New job added');
  }
  clearinput() {
    this.formValue.setValue({
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
      start_date : "",
      posting_date : "", 
    })
  } 
}
