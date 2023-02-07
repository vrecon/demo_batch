import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup | undefined;
  searchLines: FormGroup[] = [];
  fieldOptions: SelectItem[];
  operatorOptions: SelectItem[];
  cols: any[];

  constructor(private formBuilder: FormBuilder) {
    this.fieldOptions = [
      { label: 'Batch Nummer', value: 'batchNummer' },
      { label: 'Product Nummer', value: 'productNummer' },
      { label: 'Analyse Type', value: 'analyseType' },
      { label: 'Username', value: 'username' },
    ];
    this.operatorOptions = [
      { label: 'Greater than or equal', value: 'GE' },
      { label: 'Less than or equal', value: 'LE' },
      { label: 'Equal', value: 'EQUAL' },
      { label: 'Like', value: 'LIKE' },
    ];
    this.cols = [
      { field: 'field', header: 'Field' },
      { field: 'operator', header: 'Operator' },
      { field: 'value', header: 'Value' },
      { field: 'actions', header: '' },
    ];
  }

  ngOnInit() {
    this.searchForm =this.formBuilder.group({});
    this.addSearchLine();
  }

  addSearchLine() {
    const newSearchLine = this.formBuilder.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required],
    });
    this.searchLines.push(newSearchLine);
  //  this.searchForm?.addControl(searchLine${this.searchLines.length}, newSearchLine);
  }

  removeSearchLine(searchLine: FormGroup) {
    const index = this.searchLines.indexOf(searchLine);
    this.searchLines.splice(index, 1);
   // this.searchForm?.removeControl(this.searchLines(index-1));
  }

}




