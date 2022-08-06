import { Component, OnInit } from '@angular/core';
import { BackendService} from '../backend-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  searhButtons: any;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {

    this.getSearchButtons();
    
  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerColumn: 0,
    centeredSlides: false,
    speed: 400
  };

  getSearchButtons()
  {
    this.backendService.getSearchButtons().subscribe((res: any) => this.searhButtons = res);
  }

}
