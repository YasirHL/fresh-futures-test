import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService{

  constructor(private httpClient: HttpClient) { }

  getSearchButtons(): Observable<any>
  {
      return this.httpClient.get<any>("../assets/data/search-buttons.json");
  }

  getRecentSearches(): Observable<any>
  {
    return this.httpClient.get<any>("../assets/data/recent-searches.json")
  }

  getPeopleYouMayKnow(): Observable<any>
  {
    return this.httpClient.get<any>("../assets/data/people-you-may-know.json")
  }

  getTopTenCourses(): Observable<any>
  {
    return this.httpClient.get<any>("../assets/data/top-ten-courses.json")
  }

  getLatstArticles(): Observable<any>
  {
    return this.httpClient.get<any>("../assets/data/latest-articles.json")
  }
}
