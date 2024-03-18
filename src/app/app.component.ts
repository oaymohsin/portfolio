import { Component } from '@angular/core';
import { ThemeServiceService } from './services/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'portfolio';
  states=[]
  selectedState=[]

  constructor(private themeService:ThemeServiceService){}

  changeTheme(theme:any){
    console.log("button is working")
    this.themeService.switchTheme(theme)
  }
}
