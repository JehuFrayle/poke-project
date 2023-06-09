import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  show = false;
  showMenu() {
    this.show = !this.show;
  }
  setDarkMode() {
    document.body.classList.toggle('dark-theme');
  }
}
