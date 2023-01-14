import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { iKana } from './kana.model';

@Component({
  selector: 'kana',
  templateUrl: './kana.component.html',
  styleUrls: ['./kana.component.scss'],
})
export class Kana implements OnChanges {
  @Input() showGrid?: boolean = true;
  @Input() data: iKana;

  ngOnChanges(changes: SimpleChanges) {
    // if (
    //   changes &&
    //   changes['data'].previousValue != changes['data'].currentValue
    // ) {
    //   this.data = changes['data'].currentValue;
    // }
  }
}
