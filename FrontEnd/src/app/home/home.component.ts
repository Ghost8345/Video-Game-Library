import { Component, OnDestroy, OnInit } from '@angular/core';
import { Videogame } from '../DTOs/videogame';
import { HomeService } from './home.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private homeService : HomeService, private loginService : LoginService, private router : Router) {}

  videoGameList !: Array<Videogame>

  getSubscription !: Subscription
  editSubscription !: Subscription
  deleteSubscription !: Subscription
  addSubscription !: Subscription

  ngOnInit(): void {
    this.getSubscription = this.homeService.getGames().subscribe( resp => {
      console.log(resp)
      if (resp.status == 200 && resp.body){
        this.videoGameList = resp.body;
      }
      else {
        console.log("Failed")
      }
    })

  }

  editGame(videoGameHistory : [Videogame, Videogame]){
    console.log("I'm in Edit Game with this videogame, where it was:", videoGameHistory[0], " and became:", videoGameHistory[1]);
    this.editSubscription = this.homeService.editGame(videoGameHistory).subscribe( resp => {
      console.log(resp.body);
      if (resp.status == 200){
        let newGamesList : Array<Videogame> = [];
        this.videoGameList.forEach( (item) => {
        if (item != videoGameHistory[0])
          newGamesList.push(item);
        else
          newGamesList.push(videoGameHistory[1]);
    })
        this.videoGameList = newGamesList;
      }
    });
  }

  deleteGame(videoGame : Videogame){
    console.log("I'm in Delete Game with this videogame :", videoGame)
    this.deleteSubscription = this.homeService.deleteGame(videoGame).subscribe( resp => {
      console.log(resp.body)
    })

    const newGamesList = this.videoGameList.filter((videogame) => videogame != videoGame)
    this.videoGameList = newGamesList

  }

  addGame(videoGame : Videogame){
    console.log("I'm in Add Game with this videogame :", videoGame)
    this.addSubscription = this.homeService.addGame(videoGame).subscribe(
      resp => {
        console.log(resp.body);
        if (resp.status == 200 && resp.body) {
          this.videoGameList = [...this.videoGameList, resp.body as Videogame];
        }
      },
      error => {
        console.log(error.error); // Handle error
      }
    );

  }

  logout(){
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {

    if (this.getSubscription)
      this.getSubscription.unsubscribe()

    if (this.editSubscription)
      this.editSubscription.unsubscribe()

    if (this.deleteSubscription)
      this.deleteSubscription.unsubscribe()

    if (this.addSubscription)
      this.addSubscription.unsubscribe()
  }


}
