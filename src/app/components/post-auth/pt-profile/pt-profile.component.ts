import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pt-profile',
  templateUrl: './pt-profile.component.html',
  styleUrls: ['./pt-profile.component.css']
})
export class PtProfileComponent implements OnInit {

  picturePath:string
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.picturePath)
  }
}
