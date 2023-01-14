import { Component, EventEmitter, Input, Output } from '@angular/core';

// interfaces
import { iKana } from 'src/app/writing/kana/kana.model';

@Component({
  selector: 'kana-dropdown',
  templateUrl: './kana-dropdown.component.html',
  styleUrls: ['./kana-dropdown.component.scss'],
})
export class KanaDropdown {
  @Input() data: Array<iKana>;
  @Output() choice: EventEmitter<iKana> = new EventEmitter<iKana>();

  // local variables
  showDropdownOptions: boolean = false;
  chosenKana: string = '';
  chosenPronunciation: string = '';

  onToggleDropdown(): void {
    this.showDropdownOptions = !this.showDropdownOptions;
  } // toggles between showing and hiding of dropdown options

  onChooseKana(kana: string, pronunciation: string): void {
    // ?? updating dropdown
    this.chosenKana = kana;
    this.chosenPronunciation = pronunciation;

    // ?? emitting choice of kana
    this.choice.emit({ kana, pronunciation });

    // ?? close dropdown
    this.onToggleDropdown();
  } // updates dropdown and emits chosen kana
}
