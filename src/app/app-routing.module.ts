import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

/**
 * This handles the app routing.
 */

const routes: Routes = [
  /**
   * All the different routes for this app.
   * The first route covers any input after the URL there is nothing other than an empty string
   */
  {
    path: '',
    pathMatch: 'full', 
    redirectTo: 'home'
  },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie-details/:imdbID', component: MovieDetailsComponent }
];

// RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
