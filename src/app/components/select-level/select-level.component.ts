import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.scss']
})
export class SelectLevelComponent {
 levelSelected: string;

  easyButtonClick(event) {
    this.levelSelected = "easy"
  }
  mediumButtonClick(event) {
    this.levelSelected = "medium"
  }
  hardButtonClick(event) {
    this.levelSelected = "hard"
  }
}
