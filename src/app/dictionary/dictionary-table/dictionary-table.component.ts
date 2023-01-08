import { Component, Input } from '@angular/core';
import { iDictionaryTableRow } from './dictionary-table-row.model';

@Component({
  selector: 'dictionary-table',
  templateUrl: './dictionary-table.component.html',
  styleUrls: ['./dictionary-table.component.scss']
})
export class DictionaryTable {
  @Input() data: Array<iDictionaryTableRow>;
   // todo: automaticcally compile data for dictionary from vocabulary and descriptions; see sql-strategy
}
