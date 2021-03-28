import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ChequeoService {
  public ini = false;
  constructor(protected galleta: CookieService){ 

  }
  SetGalleta(){
    this.galleta.set('ini', 'true');
  }
  DeleteGalleta(){
    this.galleta.delete('ini');
  }
  LeerGalleta(){
    return this.galleta.get('ini');
  }
}
