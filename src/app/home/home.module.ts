import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from '../backend-service';
import { RecentSearchesComponent } from '../recent-searches/recent-searches.component';
import { PeopleYouMayKnowComponent } from '../people-you-may-know/people-you-may-know.component';
import { TopTenCoursesComponent } from '../top-ten-courses/top-ten-courses.component';
import { LatestArticlesComponent } from '../latest-articles/latest-articles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],

  declarations: [
    HomePage,
    RecentSearchesComponent,
    PeopleYouMayKnowComponent,
    TopTenCoursesComponent,
    LatestArticlesComponent
  ],

  providers: [BackendService]
})
export class HomePageModule { }
