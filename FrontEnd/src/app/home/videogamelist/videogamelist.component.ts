import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Videogame } from 'src/app/DTOs/videogame';

@Component({
  selector: 'app-videogamelist',
  templateUrl: './videogamelist.component.html',
  styleUrls: ['./videogamelist.component.css']
})
export class VideogamelistComponent {

  videoGameForm!: FormGroup;

  @Input() videoGameList : Array<Videogame> = [];
  
  @Output() editedGame = new EventEmitter<[Videogame, Videogame]>();
  @Output() deletedGame = new EventEmitter<Videogame>();

  selectedGame !: Videogame | null;

  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
    this.videoGameForm = this.fb.group({
      title : ['', Validators.required],
      genre : ['', Validators.required],
      releasedAt : ['', Validators.required],
      photo : [''],
      rating : [0, [Validators.required, Validators.min(1), Validators.max(10)]],
      platforms : ['', Validators.required]
    })
  }

  editGame(videogame : Videogame){
    // this.editedGame.emit(videogame);
    this.selectedGame = videogame;

    const obj  = {
      title: videogame.title,
      genre: videogame.genre,
      releasedAt: videogame.releasedAt,
      photo: videogame?.photo,
      rating: videogame.rating,
      platforms: videogame.platforms.split(", ")
    }

    this.videoGameForm.patchValue(obj)
  }

  deleteGame(videogame : Videogame){
    this.deletedGame.emit(videogame);
  }

  submitEditGame(){
    const obj = this.videoGameForm.value;
    console.log(obj);

    if (this.selectedGame) {
      const videoGame: Videogame = {
        id : this.selectedGame.id,
        title: obj.title,
        genre: obj.genre,
        releasedAt: obj.releasedAt,
        photo: obj?.photo,
        rating: obj.rating,
        platforms: obj.platforms.join(", ")
      };
      console.log(videoGame);
  
      this.editedGame.emit([this.selectedGame, videoGame]);
    }

    this.videoGameForm.reset();
    this.selectedGame = null;
  }

}
