import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService} from '../backend-service';

@Component({
  selector: 'app-people-you-may-know',
  templateUrl: './people-you-may-know.component.html',
  styleUrls: ['./people-you-may-know.component.scss'],
})
export class PeopleYouMayKnowComponent implements OnInit {

  peopleYouMayKnow: any;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getPeopleYouMayKnow();
  }

  getPeopleYouMayKnow()
  {
    return this.backendService.getPeopleYouMayKnow().subscribe((res) => this.peopleYouMayKnow = res);
  }

}
