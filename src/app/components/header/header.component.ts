import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Header Component
 *
 * Displays a header across the top of the page.
 * The "Movie Browser" text returns to the home page.
 * A search bar that hooks into the OMDB api is also included.
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryTerm: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.router.navigate(['/movies'], { queryParams: {q: this.queryTerm}});
  }
}
