import { Component, EventEmitter, Input, Output } from '@angular/core';

// interfaces
import { iDerivativeKanaCard } from './derivative-kana-card.model';
import { iKana } from '../kana/kana.model';

// data
import { KANA_DAKUTEN } from 'src/app/data/data_kanaDakuten';

@Component({
  selector: 'derivative-kana-card',
  templateUrl: './derivative-kana-card.component.html',
  styleUrls: ['./derivative-kana-card.component.scss'],
})
export class DerivativeKanaCard {
  @Input() data: iDerivativeKanaCard;
  @Output() userStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  // local variables
  kanaDakuten: Array<iKana> = KANA_DAKUTEN;
  answerGiven: boolean = false;
  userSuccess: boolean;
}
