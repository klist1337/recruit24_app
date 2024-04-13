import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  jobs: any[] = [];
  jobdescription: string[] = [];
  constructor (private fetch: FetchDataService, 
    private router: Router,
    private localservice: LocalService,
  ) {}
  ngOnInit(): void {
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
    getPartialDescription(description:string) {
      return description + '...'
    }

    goToJobs(job: any) {
      this.localservice.saveData('job', job)
      this.router.navigateByUrl(`/job/${job.job_title}_${job.employer}`);

    }
  }
