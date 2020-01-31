import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * @ignore noted that api keys will be revealed - generally bad practice anyways w/o separate file or keyvault!
 */
const baseUrl = 'http://www.omdbapi.com/?apikey=6717fc43';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(baseUrl, {params: {s: searchTerm}});
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(baseUrl, {params: {i: imdbID}})
  }
}
