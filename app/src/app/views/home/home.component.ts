import { Component, OnInit } from '@angular/core';
import { map, takeWhile, tap, timer } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcome = "Welcome"
  welcomeRandomized = ""
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  randomizeIter = 20
  placedLetters = 0

  skills = ["Java", "Python"]

  ngOnInit(): void {
    this.randomLettersEffect()
  }

  randomLettersEffect() {
    let letterPlaced = false
    timer(2000, 25).pipe(
      takeWhile(() => this.randomizeIter > 0),
      tap(() => this.randomizeIter--),
    ).subscribe(() => {
      this.welcomeRandomized = this.welcome.split("").map((originalLetter, index) => {
        if (this.randomizeIter == 0 && !letterPlaced ) {
          this.placedLetters++
          letterPlaced = true
        }
        let letter = this.letters[Math.floor(Math.random() * 26)]
        return index < this.placedLetters ? originalLetter : letter
      }).join("")
      if (this.randomizeIter == 0 && this.placedLetters !== this.welcome.length) {
        letterPlaced = false
        this.randomizeIter = 20
      }
    })
  }

}
