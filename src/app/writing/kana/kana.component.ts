import { Component, Input } from '@angular/core';
import { iKana } from './kana.model';

@Component({
  selector: 'kana',
  templateUrl: './kana.component.html',
  styleUrls: ['./kana.component.scss'],
})
export class Kana {
  @Input() showGrid?: boolean = true;
  @Input() data: iKana;
}
