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
    spaceBetween: 1,
    centeredSlides: true,
    speed: 400
  };

  getSearchButtons()
  {
    this.backendService.getSearchButtons().subscribe((res: any) => 
    {
      console.log('buttons: ', res);
      this.searhButtons = res;
  });
  }

}
