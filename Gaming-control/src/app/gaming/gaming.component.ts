import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
   id;

   num = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){

   this.id = setInterval(() => { 
        this.intervalFired.emit(this.num +1);
        
        this.num++;
    }, 1000);

    
    
  }

  onStopGame(){
    clearInterval(this.id);

  }

}
