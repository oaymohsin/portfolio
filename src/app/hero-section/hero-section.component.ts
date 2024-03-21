import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  showMenu: boolean = false;
  flexDirection: string = 'column';

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.flexDirection = this.showMenu ? 'row' : 'column';
  }
}
