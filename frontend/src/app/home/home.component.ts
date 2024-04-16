import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  jobs: any[] = [];
  jobdescription: string[] = [];
  searchValue = '';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });
  constructor (private fetch: FetchDataService, 
    private router: Router,
    private localservice: LocalService,
    private fb: FormBuilder,
  ) {}
  ngOnInit(): void {
      this.fetchalljobs();
    }
    getPartialDescription(description:string) {
      return description + '...'
    }

    goToJobs(job: any) {
      this.localservice.saveData('job', job)
      this.router.navigateByUrl(`/job/${job.job_title}_${job.employer}`);

    }
    fetchalljobs() {
      this.fetch.getAllJobPost().subscribe(
        {
          next: (job) => {
            this.jobs = job;
            for (let i = 0; i < this.jobs.length; i++)
                this.jobdescription[i] = this.jobs[i].job_description;
      
            for (let i = 0; i < this.jobs.length; i++) {
              this.jobdescription[i] = this.jobdescription[i].replace(/\n/g, '<br>');
              this.jobdescription[i] = this.getPartialDescription(this.jobdescription[i].substring(0, 200));
            }
          },
          error: (error) => console.error(error),
        }
      )
    }
    fetchData() {
      this.searchValue = this.capitalizeFirst(this.searchValue);
      this.fetch.getSearchValue(this.searchValue).subscribe( {
        next: (job => {
          this.jobs = job;
          //console.log(this.jobs);
        }),
        error: (error => console.error(error)
        ),
      }
      );
    }
    onSearchSubmit() {
      this.searchValue = this.searchForm.value.searchValue ?? '';
      console.log({
        'search value': this.searchValue
      })
      if (!this.searchValue)
          this.fetchalljobs();
      this.fetchData();
    }

    capitalizeFirst(str:string): string {

      if(!str) return str;

      const firstLetter = str[0];
      const restOfStr = str.slice(1);
      if (firstLetter === firstLetter.toLowerCase())
        return firstLetter.toUpperCase() + restOfStr;
      return str;
  }
}
