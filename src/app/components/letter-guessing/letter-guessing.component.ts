import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './letter-guessing.component.html',
  styleUrls: ['./letter-guessing.component.scss']
})
export class LetterGuessingComponent implements OnInit {
  //public name: string;
  public lifeValue: number;
  public levelSelected: string = "easy";
  public keyBoardString: string;
  public randomStringGenerated: string;
  public stringIndexToBeHidden: any[];
  public stringLength: number;
  public objects: any[] = [];
  public keyboardArray: any[] = [];

  constructor() {

  }

  keyboardClick(event) {
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
    event.currentTarget.style.setProperty("background-color", isCorrectSelect ? "lightgreen" : "lightcoral")

  }
  ngOnInit() {
    if (this.levelSelected === "easy") {
      this.lifeValue = 11;
    }
    this.keyBoardString = "qwertyuiopasdfghjklzxcvbnm";
    this.randomStringGenerated = "hello angular app how are you";
    this.stringIndexToBeHidden = [4, 7, 9, 11, 14, 21, 22, 28];
    this.stringLength = this.randomStringGenerated.length;
    this.objects = []
    this.keyboardArray = this.keyBoardString.toUpperCase().split('');
    for (let i: number = 0; i < this.stringLength; i++) {
      this.objects[i] = []
      if (this.randomStringGenerated.charAt(i).toString() === " ") {
        this.objects[i].RandomString = "emptyspace"
      } else {
        this.objects[i].RandomString = this.randomStringGenerated.charAt(i)
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
}


