import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }
  darkMode$ = new BehaviorSubject<boolean>(this.getDarkMode());

  setDarkMode(isDarkMode: boolean): void {
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    this.darkMode$.next(isDarkMode);
  }
  getDarkMode(): boolean {
    const darkMode = localStorage.getItem('darkMode');
    if(darkMode === null) return true;

    return localStorage.getItem('darkMode') === 'true';
  }
}
