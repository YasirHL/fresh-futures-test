import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service';

@Component({
  selector: 'app-top-ten-courses',
  templateUrl: './top-ten-courses.component.html',
  styleUrls: ['./top-ten-courses.component.scss'],
})
export class TopTenCoursesComponent implements OnInit {

  courses: any;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getTopTenCourses();
  }

  getTopTenCourses()
  {
    this.backendService.getTopTenCourses().subscribe((res) => {this.courses = res, console.log('top:', res)});
  }

}
