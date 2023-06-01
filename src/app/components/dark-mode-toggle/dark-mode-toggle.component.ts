import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService){}

  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.getDarkMode();
    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
      document.body.classList.toggle('dark-theme', isDarkMode);
    });
  }
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeService.setDarkMode(this.isDarkMode);
  }
}
