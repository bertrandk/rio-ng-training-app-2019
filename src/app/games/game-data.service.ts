import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

const BASE_URL = `https://rio-ng-training.now.sh/games`;
@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Game[]>(`${BASE_URL}`);
  }

  get(id: number) {
    return this.httpClient.get<Game>(`${BASE_URL}/${id}`);
  }
  create(game: any) {
    return this.httpClient.post<Game>(`${BASE_URL}`, game);
  }

  update(game: any) {
    return this.httpClient.put<Game>(`${BASE_URL}/${game.id}`, game);
  }
}
