import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../classes/item-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Man } from '../../classes/man';
import { Woman } from '../../classes/woman';
import { FunctionalService } from '../../services/functional.service';

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

  constructor(
    private snackbar: MatSnackBar,
    private functional: FunctionalService
  ) {}

  ngOnInit(): void {
    const sam = new Man('Sam', 30);
    const samantha = new Woman('Samantha', 27);
    const erik = new Man('Erik', 25);

    this.functional.getPeopleIntoConversation(sam, samantha);
    this.functional.getPeopleIntoConversation(erik, samantha);
    this.functional.getPeopleIntoConversation(erik, sam);
  }

  public notify(event: string): void {
    this.snackbar.open(event);
  }
}
