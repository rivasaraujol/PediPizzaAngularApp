import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent implements OnInit {
  
  public menuOpen =false;

  constructor() { }

  ngOnInit(): void {
  }

  ActivarMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
