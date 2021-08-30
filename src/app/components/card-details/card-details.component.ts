import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
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
  {DateEntered: '2/2/2021',SlNo:1,PremiseNo:12145356464, Address: 'Sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'Sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'Sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'},
  {DateEntered: '2/2/2021', SlNo:1,PremiseNo:12145356464, Address: 'sample 1',Status:'Install', SessionName:'ST_5 8 2021_5188200077'}
 
];

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})


export class CardDetailsComponent implements OnInit {

  formGroup: FormGroup; 
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    // let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'date': [null, Validators.required],      
      'validate': ''
    });
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
