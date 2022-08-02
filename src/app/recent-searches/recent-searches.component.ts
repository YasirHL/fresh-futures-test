import { Component, OnInit } from '@angular/core';
import { BackendService} from '../backend-service';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
})
export class RecentSearchesComponent implements OnInit {

  recentSearches: any;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getRecentSearches();
  }


  getRecentSearches()
  {
    this.backendService.getRecentSearches().subscribe((res) => this.recentSearches = res);
  }

}
