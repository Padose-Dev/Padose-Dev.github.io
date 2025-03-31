import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  standalone:true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class SubscribeComponent {
  subscribeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      contact: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?:\+\d{1,3}[- ]?)?\d{10}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/
          ),
        ],
      ],
    });
  }

  get contact() {
    return this.subscribeForm.get('contact')!;
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      console.log('Subscribed with:', this.subscribeForm.value.contact);
    }
  }
}
