import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeoService } from '../chequeo.service';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent implements OnInit {
  
  public menuOpen =false;

  constructor(protected chequeo: ChequeoService, protected router: Router) { }

  ngOnInit(): void {
  }

  ActivarMenu(){
    this.menuOpen = !this.menuOpen;
  }
  LogOut(){
    this.chequeo.DeleteGalleta();
    this.router.navigate(['']);
  }
}
