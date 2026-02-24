import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-seller-onboarding',
  templateUrl: './seller-onboarding.component.html',
  styleUrls: ['./seller-onboarding.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class SellerOnboardingComponent implements OnInit {
  sellerForm!: FormGroup;
  userAccountSetupForm!: FormGroup;
  submissionSuccess = false;
  submitting = false;
  enquiryCount = 0;
  currentStep = 1;
  steps = [1, 2, 3];
  stepLabels = ['Mobile Number', 'OTP Verification', 'Seller Details'];

  formFields = [
    { key: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Enter your business name' },
    { key: 'productCategory', label: 'Category', type: 'text', placeholder: 'Enter product category' },
    { key: 'description', label: 'Description', type: 'textarea', placeholder: 'Description' },
    { key: 'sellerFirstName', label: 'Seller First Name', type: 'text', placeholder: 'Enter seller first name' },
    { key: 'sellerLastName', label: 'Seller Last Name', type: 'text', placeholder: 'Enter seller last name' },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { key: 'contactNumber', label: 'Contact Number', type: 'tel', placeholder: 'Enter contact number' },
    {
      key: 'preferredLanguage', label: 'Preferred Language', type: 'select', options: [
        { value: 'en', label: 'English' },
        { value: 'hi', label: 'हिन्दी' },
        { value: 'bn', label: 'বাংলা' },
        { value: 'ta', label: 'தமிழ்' },
        { value: 'te', label: 'తెలుగు' },
        { value: 'mr', label: 'मराठी' },
        { value: 'pa', label: 'ਪੰਜਾਬੀ' },
        { value: 'ml', label: 'മലയാളം' },
        { value: 'kn', label: 'ಕನ್ನಡ' },
        { value: 'or', label: 'ଓଡ଼ିଆ' },
        { value: 'as', label: 'অসমীয়া' },
        { value: 'ur', label: 'اردو' }
      ]
    },
    {
      key: 'sellFrom', label: 'Where do you sell from', type: 'select', options: [
        { value: 'shop', label: 'Shop' },
        { value: 'home', label: 'Home' },
        { value: 'cart', label: 'Cart' }
      ]
    },
    { key: 'city', label: 'City', type: 'text', placeholder: 'Enter your city' }
  ];
  
  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.loadEnquiryCount();

    this.userAccountSetupForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });

    this.sellerForm = this.fb.group({
      businessName: ['', [Validators.required, Validators.pattern(/^[\w\s\-&.]{3,}$/)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      productCategory: ['', [Validators.required, Validators.pattern(/^[\w\s\-&.]{2,50}$/)]],
      sellerFirstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,30}$/)]],
      sellerLastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,30}$/)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
      preferredLanguage: ['', Validators.required],
      sellFrom: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,50}$/)]]
    });
  }

  navigateToFormStep(stepNumber: number): void {
    if (stepNumber === 2) {
      const mobileControl = this.userAccountSetupForm.get('mobile');
      mobileControl?.markAsTouched();
      if (mobileControl?.invalid) return;
    }
  
    if (stepNumber === 3) {
      const otpControl = this.userAccountSetupForm.get('otp');
      otpControl?.markAsTouched();
      if (otpControl?.invalid) return;
    }
  
    this.currentStep = stepNumber;
  }

  async onSubmit(): Promise<void> {
    if (this.sellerForm.valid) {
      this.submitting = true;
      try {
        await this.firebaseService.addSellerEnquiry(this.sellerForm.value);
        this.submissionSuccess = true;
        this.enquiryCount++;
      } catch (err) {
        console.error('Error submitting enquiry', err);
      } finally {
        this.submitting = false;
      }
    } else {
      this.sellerForm.markAllAsTouched();
    }
  }

  private async loadEnquiryCount(): Promise<void> {
    try {
      this.enquiryCount = await this.firebaseService.getEnquiryCount();
    } catch {
      this.enquiryCount = 0;
    }
  }
}
