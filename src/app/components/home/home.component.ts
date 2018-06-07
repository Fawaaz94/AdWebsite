import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  moduleId:  module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild('openbtn') openBTN;
  @ViewChild('closebtn') closeBTN;
  @ViewChild('navOperate') navOperate;
  
  
  constructor() 
  { 

  }

  ngOnInit() 
  {

  }

  openNav()
  {
    this.navOperate.nativeElement.style.display = "block";

  }  

  closeNav()
  {
    this.navOperate.nativeElement.style.display = "none";
  }  


}
