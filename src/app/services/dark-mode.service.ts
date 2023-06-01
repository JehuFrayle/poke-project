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

    console.log('Dark mode set to ' + isDarkMode);
  }
  getDarkMode(): boolean {
    const darkMode = localStorage.getItem('darkMode');
    if(darkMode === null) return true;

    return localStorage.getItem('darkMode') === 'true';
  }
}
