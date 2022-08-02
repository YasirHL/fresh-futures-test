import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.scss'],
})
export class LatestArticlesComponent implements OnInit {

  latestArticles: any;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getLatestArticles();
  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.4,
    spaceBetween: 10,
    centeredSlides: false,
    speed: 400
  };

  getLatestArticles()
  {
    this.backendService.getLatstArticles().subscribe((res) => this.latestArticles = res);
  }

}
