import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition,} from '@angular/animations';

import { PruebaService } from 'src/app/prueba.service';

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity: 1,
    })
  ),
  state(
    'close',
    style({
      opacity: 0,
      transform: 'translate(0, 5px)'
    })
  ),
  transition('open => close', [animate('.15s ease-out')]),
  transition('close => open', [animate('.2s ease-in')]),
]);

const leftInOut = trigger('leftInOut', [
  state(
    'open',
    style({
      position: 'relative',
      overflow: 'hidden'
    })
  ),
  state(
    'close',
    style({
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
    })
  ),
  transition('open => close', [animate('500ms ease-in-out', style({ left: '-100%' }))]),
  transition('close => open', [animate('200ms ease-in', style({ left: '0%' }))]),
]);

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [fadeInOut, leftInOut],
  providers: [PruebaService]
})


export class NavigationComponent implements OnInit {
  
  public listUsers:any = []

  isShow = false;
  mobileSubMenu = false;
  mobileMenu: boolean = true;

  constructor(private PruebaService:PruebaService){

  }

  ngOnInit(): void {
    this.loadUserData();
  }

  public loadUserData(){
    this.PruebaService.get('http://localhost:2000/user/users')
    .subscribe(respuesta => {
      this.listUsers = respuesta;
    })
  }

  fadeInOutDropdown(): void {
    this.isShow = !this.isShow;
  }

  mobileMOpen() {
    this.mobileMenu = !this.mobileMenu;
  }

  mobileSubOpen() {
    this.mobileSubMenu = !this.mobileSubMenu;
  }

}
