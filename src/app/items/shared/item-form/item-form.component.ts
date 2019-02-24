import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { FormValidatorsService } from 'src/app/shared/form-validators.service';
import { Item } from '../item';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.less']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup;
  @Input() itemInformation = {
    name: null,
    description: null,
    price: null,
    discount: null
  };
  @Output() formOutput: EventEmitter<Item> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private validatorService: FormValidatorsService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.itemForm = this.fb.group({
      name: [this.itemInformation.name, Validators.required],
      description: [this.itemInformation.description, Validators.required],
      price: [this.itemInformation.price, [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      discount: [this.itemInformation.discount, [
        Validators.required, Validators.pattern('^[0-9]*$'),
        this.validatorService.discountValidator()
      ]]
    });
  }

  formControlName(formControlName: string): AbstractControl {
    return this.itemForm.get(formControlName);
  }

  onSubmit() {
    if (this.itemForm.valid) {
      this.formOutput.emit(this.itemForm.value);
    }
  }

}
