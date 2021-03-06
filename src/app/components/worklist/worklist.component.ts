import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement { 
  DateEntered: string;  
  SlNo:number;
  PremiseNo: number;
  Address: string;
  Status: string ;
  SessionName: string ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {DateEntered: '2/2/2021',SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'}
 
];

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
  displayedColumns: string[] = ['select', 'DateEntered', 'SlNo', 'PremiseNo', 'Address','Status','SessionName'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.SlNo + 1}`;
  }

}
