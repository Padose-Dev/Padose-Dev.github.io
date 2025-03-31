import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-onboarding',
  templateUrl: './seller-onboarding.component.html',
  styleUrls: ['./seller-onboarding.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class SellerOnboardingComponent implements OnInit {
  sellerForm!: FormGroup;

  formFields = [
    {
      key: 'businessName',
      label: 'Business Name',
      type: 'text',
      placeholder: 'Enter your business name'
    },
    {
      key: 'contactNumber',
      label: 'Contact Number',
      type: 'tel',
      placeholder: 'Enter contact number'
    },
    {
      key: 'sellerName',
      label: 'Seller Name',
      type: 'text',
      placeholder: 'Enter seller name'
    },
    {
      key: 'preferredLanguage',
      label: 'Preferred Language',
      type: 'select',
      options: [
        { value: 'english', label: 'English' },
        { value: 'hindi', label: 'Hindi' },
        { value: 'spanish', label: 'Spanish' }
      ]
    },
    {
      key: 'sellFrom',
      label: 'Where do you sell from',
      type: 'select',
      options: [
        { value: 'home', label: 'Home' },
        { value: 'store', label: 'Store' },
        { value: 'online', label: 'Online' }
      ]
    },
    {
      key: 'city',
      label: 'City',
      type: 'select',
      options: [
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'bangalore', label: 'Bangalore' }
      ]
    }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      businessName: ['', [Validators.required, Validators.pattern(/^[\w\s\-&.]{3,}$/)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
      sellerName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,30}$/)]],
      preferredLanguage: ['', Validators.required],
      sellFrom: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.sellerForm.valid) {
      const formData = this.sellerForm.value;
      this.http.post('https://your-api-endpoint.com/submit', formData).subscribe({
        next: response => console.log('Success', response),
        error: err => console.error('Error', err)
      });
    } else {
      this.sellerForm.markAllAsTouched();
    }
  }
}
