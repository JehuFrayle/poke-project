import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor() { }
  isLoading$ = new Subject<boolean>();
  isFinalizing$ = new Subject<boolean>();
  showLoading(){
    this.isLoading$.next(true);
    this.isFinalizing$.next(false);
  }
  hideLoading(){
    this.isFinalizing$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
    }, 1000);
  }
}
