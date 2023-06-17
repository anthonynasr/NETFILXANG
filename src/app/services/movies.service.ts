import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  constructor() {
    // Initialize the movies ReplaySubject with an empty array
    this.movies.next([]);
  }

  // Add a movie to the movies ReplaySubject
  addMovie(movie: any): void {
    this.movies.pipe(take(1)).subscribe((currentMovies: any[]) => {
      const updatedMovies = [...currentMovies, movie];
      this.movies.next(updatedMovies);
    });
  }

  // Remove a movie from the movies ReplaySubject
  removeMovie(movie: any): void {
    this.movies.pipe(take(1)).subscribe((currentMovies: any[]) => {
      const updatedMovies = currentMovies.filter((m: any) => m.id !== movie.id);
      this.movies.next(updatedMovies);
    });
  }

  // Get the movies as an Observable
  getMovies(): Observable<any[]> {
    return this.movies.asObservable();
  }
}
