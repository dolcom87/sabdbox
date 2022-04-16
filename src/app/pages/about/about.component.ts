import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../classes/item-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Man } from '../../classes/man';
import { Woman } from '../../classes/woman';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public items: ItemModel[] = [
    { id: 1, content: 'content of item 1', isVisible: true },
    { id: 2, content: 'content of item 2', isVisible: false },
    { id: 3, content: 'content of item 3', isVisible: true },
    { id: 4, content: 'content of item 4', isVisible: false },
    { id: 5, content: 'content of item 5', isVisible: true },
  ];

  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    const sam = new Man('Sam', 30);
    const samantha = new Woman('Samantha', 27);

    sam.greet();
    samantha.greet();
    sam.offerToGetIntoSexWith(samantha);
    samantha.agree();
    sam.getSexWith(samantha);

    console.log('');
    const erik = new Man('Eric', 25);

    erik.greet();
    sam.greet();
    erik.offerToGetIntoSexWith(sam);
    sam.refuse();
    erik.soSorry();
    sam.noItsNotSorry();

    console.log('');
  }

  public notify(event: string): void {
    this.snackbar.open(event);
  }
}
