// app.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CommonModule,FormsModule]
})
export class AppComponent {

  selectedNumber : number = 0;
  title :string = "Hbday";
  wishes: string[] = [
    'Happy Birthday! 🎉 Wishing you a year full of blessings!',
    'May your birthday be filled with joy and laughter! 🥳',
    'Wishing you health, happiness, and success! 🎂',
    'Have a fantastic birthday celebration! 🎈',
    'Enjoy your special day to the fullest! 🎁'
  ];
  selectedWish: string = 'Happy Birthday Nirmal';
  
  selectWish() {
    this.selectedWish = this.wishes[this.selectedNumber % this.wishes.length];
    console.log(this.selectedWish);
    console.log(this.selectedNumber);
  }
}
