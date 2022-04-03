import { Component } from '@angular/core';
import { ItemModel } from './classes/item-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'sandbox';
  public items: ItemModel[] = [
    { id: 1, content: 'content of item 1', isVisible: true },
    { id: 2, content: 'content of item 2', isVisible: false },
    { id: 3, content: 'content of item 3', isVisible: true },
    { id: 4, content: 'content of item 4', isVisible: false },
    { id: 5, content: 'content of item 5', isVisible: true },
  ];

  constructor(private snackbar: MatSnackBar) {}

  public notify(event: string): void {
    this.snackbar.open(event);
  }
}
