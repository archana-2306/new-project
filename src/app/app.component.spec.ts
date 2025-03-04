// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedWish: string = 'Acva';

  wishes: string[] = [
    'Happy Birthday! 🎉 Wishing you a year full of blessings!',
    'May your birthday be filled with joy and laughter! 🥳',
    'Wishing you health, happiness, and success! 🎂',
    'Have a fantastic birthday celebration! 🎈',
    'Enjoy your special day to the fullest! 🎁'
  ];

 
  
  selectWish(index: number): void {
    this.selectedWish = this.wishes[index % this.wishes.length];
  }
}
