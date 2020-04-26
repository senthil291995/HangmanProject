import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './letter-guessing.component.html',
  styleUrls: ['./letter-guessing.component.scss']
})
export class LetterGuessingComponent implements OnInit {
  public lifeValue: number;
  public levelSelected: string = "easy";
  public keyBoardString: string;
  public randomStringGenerated: string;
  public stringIndexToBeHidden: any[];
  public stringLength: number;
  public objects: any[];
  public keyboardArray: any[];
  public styleValue: any = { style: { strokeWidth: 1, stroke: "black" } };
  public styleValue1: any = { style: { strokeWidth: 2, stroke: "black" } };

  constructor() {
    this.keyboardArray = [];
  }

  keyboardClick(event) {
    if (this.lifeValue <= 0) {
      alert("Game Over!You lost")
      return;
    }
    let selectedKeyBoardValue = event.currentTarget.innerText
    let isCorrectSelect: boolean = false;
    for (let i: number = 0; i < this.objects.length; i++) {
      if (this.objects[i].RandomString === event.currentTarget.innerText && this.objects[i].toBeHidden) {
        isCorrectSelect = true;
        this.objects[i].toBeHidden = false

      }
    }
    if (!isCorrectSelect) {
      this.lifeValue -= 1
    }
    event.currentTarget.style.setProperty("background-color", isCorrectSelect ? "green" : "red")

  }
  createObject(randomStringGenerated: any, stringCount?: any, lineCount?: any) {
    for (let i: number = 0 + stringCount; i < randomStringGenerated.length + stringCount; i++) {
      this.objects[i] = [];
      this.objects[i].lineNumber = lineCount;
      if (randomStringGenerated.charAt(i - stringCount).toString() === " ") {
        this.objects[i].RandomString = "emptyspace"
      } else {
        this.objects[i].RandomString = randomStringGenerated.charAt(i - stringCount).toUpperCase();
      }
      for (let j: number = 0; j < this.stringIndexToBeHidden.length; j++) {
        if (this.stringIndexToBeHidden[j] === i) {
          this.objects[i].toBeHidden = true;
          break
        } else {
          this.objects[i].toBeHidden = false;
        }
      }
    }
  }
  ngOnInit() {
    if (this.levelSelected === "easy") {
      this.lifeValue = 11;
    }
    this.keyBoardString = "qwertyuiopasdfghjklzxcvbnm";
    var firstLine = "hello angular app"
    var secondLine = "app how are you"
    this.stringIndexToBeHidden = [4, 7, 9, 11, 14, 21, 22, 28, 0];
    this.objects = []
    this.keyboardArray = this.keyBoardString.toUpperCase().split('');
    this.createObject(firstLine, 0, '0');
    this.createObject(secondLine, firstLine.length, '1');

  }
}


