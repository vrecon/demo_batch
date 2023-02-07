import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fieldNames: any[] = [
    {label: 'Batch Number', value: 'batchNumber'},
    {label: 'Product Number', value: 'productNumber'},
    {label: 'Analyse Type', value: 'analyseType'},
    {label: 'Username', value: 'username'}
  ];
  selectedFieldName: string;

  operators: any[] = [
    {label: 'Greater Than or Equal', value: 'GE'},
    {label: 'Less Than or Equal', value: 'LE'},
    {label: 'Equal', value: 'EQUAL'},
    {label: 'Like', value: 'LIKE'}
  ];
  selectedOperator: string;

  value: string;

  searchCriterias: any[] = [];

  addSearchCriteria() {
    this.searchCriterias.push({
      fieldName: this.selectedFieldName,
      operator: this.selectedOperator,
      value: this.value
    });
    this.selectedFieldName = null;
    this.selectedOperator = null;
    this.value = null;
  }
}
