import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseItem } from '../../classes/base-item';
import { MathPoint } from '../../classes/math-point';
import { Printable } from '../../interfaces/printable';
import { LocalString } from '../../classes/local-string';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent extends BaseItem implements OnInit {
  private readonly text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut eaque modi quam totam vel. Dicta fugiat incidunt maiores, minus molestias natus, porro recusandae saepe soluta sunt tenetur, ut voluptas?';

  @Output()
  public changeVisibility: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    const point = new MathPoint(
      Math.ceil(Math.random() * 100),
      Math.ceil(Math.random() * 100)
    );
    this.printData(point);

    const stringA = new LocalString(
      this.text.substring(0, (Math.random() * 100) % this.text.length)
    );

    this.printData(stringA);
  }

  private printData(data: Printable): void {
    data.print();
  }

  public onChange(): void {
    this.data.isVisible = !this.data.isVisible;
    this.changeVisibility.emit(
      'An item #' +
        this.data.id +
        " content's visibility has been changed to " +
        (this.data.isVisible ? 'visible' : 'invisible')
    );
  }
}
