import { Component } from '@angular/core';
import { RegisterService } from 'src/app/register.service';
import { ThemeServiceService } from 'src/app/theme-service.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent {

  user: any = {};

  isDarkMode = false;

  constructor(private themeServiceService: ThemeServiceService, private registerService: RegisterService) {
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  toggleDarkMode() {
    this.themeServiceService.toggleDarkMode();
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  signUp(){
    this.registerService.addUser(this.user)
    .subscribe(
      response => {
        console.log(response);
        this.user = {};
      },
      error => {
        console.error(error);
      }
    );

  }

}
