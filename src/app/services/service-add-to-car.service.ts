import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAddToCarService {
  @Output() activatorAddToCart: EventEmitter<any> = new EventEmitter()
  constructor() { }
}
