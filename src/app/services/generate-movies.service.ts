import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateMoviesService {

  constructor() { }

  randomizeMovieData(): any {
    let randomizedMovie:any = {};
    // Randomize id
    randomizedMovie.id = Math.floor(Math.random() * 10000).toString();

    // Randomize code
    randomizedMovie.code = this.generateRandomCode();

    // Randomize name
    randomizedMovie.name = this.generateRandomName();

    // Randomize description
    randomizedMovie.description = this.generateRandomDescription();

    // Randomize price
    randomizedMovie.price = Math.floor(Math.random() * 100) + 1;

    // Randomize category
    randomizedMovie.category = this.generateRandomCategory();

    // Randomize quantity
    randomizedMovie.quantity = Math.floor(Math.random() * 50) + 1;

    // Randomize inventory status
    randomizedMovie.inventoryStatus = this.generateRandomInventoryStatus();

    // Randomize rating
    randomizedMovie.rating = Math.floor(Math.random() * 5) + 1;

    return randomizedMovie;
  }

  // Helper to generate a random code
  generateRandomCode(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  }

  // Helper to generate a random name
  generateRandomName(): string {
    const names = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  // Helper to generate a random description
  generateRandomDescription(): string {
    const descriptions = ['Description 1', 'Description 2', 'Description 3'];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
  }

  // Helper to generate a random category
  generateRandomCategory(): string {
    const categories = ['Action', 'Comedy', 'Romantic', 'Drama', 'Sci-Fi'];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  // Helper to generate a random inventory status
  generateRandomInventoryStatus(): string {
    const inventoryStatuses = ['showing now', 'ended last month', 'upcoming'];
    const randomIndex = Math.floor(Math.random() * inventoryStatuses.length);
    return inventoryStatuses[randomIndex];
  }
}
