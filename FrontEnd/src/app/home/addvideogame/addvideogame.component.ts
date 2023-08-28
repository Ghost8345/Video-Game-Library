import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Videogame } from 'src/app/DTOs/videogame';

@Component({
  selector: 'app-addvideogame',
  templateUrl: './addvideogame.component.html',
  styleUrls: ['./addvideogame.component.css']
})
export class AddvideogameComponent implements OnInit {

  @Output() addedGame = new EventEmitter<Videogame>();

  videoGameForm!: FormGroup;

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

  addGame(){
    const obj = this.videoGameForm.value;
    console.log(obj);

    const videoGame : Videogame = {
      title: obj.title,
      genre: obj.genre,
      releasedAt: obj.releasedAt,
      photo: obj?.photo,
      rating: obj.rating,
      platforms: obj.platforms.join(", ")
    }
    console.log(videoGame)

    this.addedGame.emit(videoGame);
    this.videoGameForm.reset();
  }



}
