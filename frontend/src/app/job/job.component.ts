import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit {
  routeName:string = "";
  job: any;
  text:string = "";
  constructor(private localService: LocalService, private route: ActivatedRoute) {}

  ngOnInit() 
  : void {
    this.job = this.localService.getData('job');
    this.route.params.subscribe(params =>
      this.routeName = params["routeName"],
    );
  }

  writeWithNewLine(text:string) {
    text = text.replace(/\n/g, '<br>');
    return text;
  }

  yearWages(wages: string) {

    return wages === 'null' ? '' : wages;
  }

}
