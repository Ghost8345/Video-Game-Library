import { Injectable } from '@angular/core';
import { Videogame } from '../DTOs/videogame';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BACKENDURL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Array<Videogame>>(`${BACKENDURL}/videogame`, {observe: 'response'})
  }
    
  deleteGame(game : Videogame){
    return this.http.delete(`${BACKENDURL}/videogame/${game.id}`, {observe: 'response',
    responseType: 'text'})
    
  }

  addGame(game : Videogame) {
    return this.http.post(`${BACKENDURL}/videogame`, game, {observe: 'response'})
  }

  editGame(videoGameHistory: [Videogame, Videogame]) {
    return this.http.put(`${BACKENDURL}/videogame`, videoGameHistory[1], {observe: 'response'})
    
  }

}
