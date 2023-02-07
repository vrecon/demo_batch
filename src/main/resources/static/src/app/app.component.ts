import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup | undefined;
  searchLines: FormArray | undefined;
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
    ];
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchLines: this.formBuilder.array([this.createSearchLine()])
    });
  }

  createSearchLine(): FormGroup {
    return this.formBuilder.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  addSearchLine() {
    (this.searchForm?.get('searchLines') as FormArray).push(this.createSearchLine());
  }

  removeSearchLine(index: number) {
    (this.searchForm?.get('searchLines') as FormArray).removeAt(index);
  }

  onSubmit() {
    console.log(this.searchForm?.value);
  }
   

}




