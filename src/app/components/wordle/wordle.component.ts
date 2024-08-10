import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {WinDialogComponent} from "../win-dialog/win-dialog.component";
import {LoseDialogComponent} from "../lose-dialog/lose-dialog.component";

@Component({
  selector: 'app-wordle',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './wordle.component.html',
  styleUrl: './wordle.component.css'
})
export class WordleComponent implements OnInit {

  currentRow = 0;
  currentLetter = 0;
  answer: string = 'shark';
  answerSize = 0;
  rows: string[] = ['', '', '', '', '', ''];
  rowResults: string[] = [];
  keyboardRows = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m'],
  ];

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    // TODO: get random word
    this.answer = 'shark';
    this.answerSize = this.answer.length;
    this.rows = ['', '', '', '', '', ''];
    this.rowResults = [];
    this.currentRow = 0;
    this.currentLetter = 0;
  }

  addLetter(letter: string): void {
    this.rows[this.currentRow] += letter;
    this.currentLetter += 1;

    if (this.currentLetter === this.answerSize) {
      this.checkRowAccuracy(this.currentRow);
      this.currentRow += 1;
      this.currentLetter = 0;
    }
  }

  checkRowAccuracy(rowIndex: number): void {
    const guessedWord = this.rows[rowIndex];
    let rowAccuracyString = '';

    for (let i = 0; i < this.answerSize; i += 1) {
      const currentChar = guessedWord.charAt(i);
      const doesCharacterExistInWord = this.answer.includes(currentChar);

      if (doesCharacterExistInWord) {
        const isCharacterInCorrectSpot = this.answer.charAt(i) === currentChar;

        if (isCharacterInCorrectSpot) {
          rowAccuracyString += 'g';
        } else {
          // TODO: if the current letter exists but is already green somewhere else,
          //  we should NOT show yellow here
          rowAccuracyString += 'y';
        }
      } else {
        rowAccuracyString += 'x';
      }
    }

    this.rowResults.push(rowAccuracyString);

    if (!(rowAccuracyString.includes('x') || rowAccuracyString.includes('y'))) {
      this.showWinDialog();
    } else {
      if (rowIndex === 5) {
        this.showLoseDialog();
      }
    }
  }

  showWinDialog(): void {
    this.matDialog.open(WinDialogComponent, {disableClose: true}).afterClosed().subscribe((res) => {
      if (res === 'restart') {
        this.initializeGame();
      }
    })
  }

  showLoseDialog(): void {
    this.matDialog.open(LoseDialogComponent, {disableClose: true}).afterClosed().subscribe((res) => {
      if (res === 'restart') {
        this.initializeGame();
      }
    })
  }
}
