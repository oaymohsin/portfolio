import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  showMenu: boolean = false;
  flexDirection: string = 'column';

  NetflixDescription: string =
    'I built a Netflix clone using Angular, which handles the app structure and TailwindCSS for styling. For the movie and show information, I connected to TMDB (The Movie Database) to fetch data. I also used the Swiper library to create the sliding movie carousels, similar to what you see on Netflix. This project showcases my skills in using Angular, TailwindCSS, integrating APIs, and enhancing user interface with Swiper.';

    NgShopDescription:string=' Built with cutting-edge technologies, this project is a full-fledged E-Commerce web application Leveraging the power of Angular for a dynamic user interface, Node.js for server-side logic, and MongoDB for a flexible database, it delivers a seamless online shopping experience.'
  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.flexDirection = this.showMenu ? 'row' : 'column';
  }
}
