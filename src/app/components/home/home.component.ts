import { Component, OnInit } from '@angular/core';

/**
 * Home Component
 * 
 * This displays the main page of the app.
 * Contains a picture of the dev, with a link to documentation.
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
