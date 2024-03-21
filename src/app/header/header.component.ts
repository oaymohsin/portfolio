import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu: boolean = false;
  flexDirection: string = 'column';

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.flexDirection = this.showMenu ? 'row' : 'column';
  }
}
