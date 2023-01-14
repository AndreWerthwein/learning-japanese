import { Component, Input } from '@angular/core';

// interfaces
import { iCompositeKanaCardCard } from './composite-kana-card.model';

@Component({
  selector: 'composite-kana-card',
  templateUrl: './composite-kana-card.component.html',
  styleUrls: ['./composite-kana-card.component.scss'],
})
export class CompositeKanaCard {
  @Input() data: iCompositeKanaCardCard;
}
