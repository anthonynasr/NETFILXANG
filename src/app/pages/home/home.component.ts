import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { GenerateMoviesService } from '../../services/generate-movies.service';
import { StorageService } from '../../services/storage.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private moviesService: MoviesService,
    private generateMoviesService: GenerateMoviesService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    let self = this;
    this.moviesService
      .getMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        self.data = [...data];
      });
  }

  addMovie() {
    let newMovie = this.generateMoviesService.randomizeMovieData();
    this.moviesService.addMovie(newMovie);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
