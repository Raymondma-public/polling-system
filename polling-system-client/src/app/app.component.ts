import { Component, OnInit,AfterViewInit } from '@angular/core';
import {PollService} from './services/poll-service.service'
import { Poll } from './models/poll';
import { Chart } from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  polls:Poll[];

  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['YES', 'NO'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
 21, 59
    
 
  ];

  // CHART COLOR.
  // colors = [{backgroundColor: '#000'},{backgroundColor: '#333'}
    
  // ]

  constructor(private pollService:PollService){

  }

  getPolls():void{
    this.pollService.getAll().subscribe(res=>{
      this.polls=res.polls;
      console.log(this.polls);
      if(this.polls[0]){
        this.title=this.polls[0].title;
      }else{
       
      }
    }
  );
  }
  ngOnInit(){
    this.getPolls();
  }
  onChartClick(e,id) {
    console.log("id", id);
    if(e.active.length > 0) {
      console.log("Index", e.active[0]._index);
      console.log("Data" , e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index]);
      console.log("Label" , e.active[0]._chart.config.data.labels[e.active[0]._index]);
      }
  }

}
