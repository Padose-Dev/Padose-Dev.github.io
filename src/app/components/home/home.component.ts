import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { SectionsComponent } from "../sections/sections.component";
import { SubscribeComponent } from "../subscribe/subscribe.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SectionsComponent, SubscribeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
