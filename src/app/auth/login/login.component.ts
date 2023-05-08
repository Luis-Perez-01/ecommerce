import { Component } from '@angular/core';
import { ThemeServiceService } from 'src/app/theme-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isDarkMode = false;

  constructor(private themeServiceService: ThemeServiceService) {
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  toggleDarkMode() {
    this.themeServiceService.toggleDarkMode();
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

}
