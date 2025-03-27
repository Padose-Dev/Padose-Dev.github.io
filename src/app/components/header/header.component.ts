import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class HeaderComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'mr', label: 'मराठी' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'or', label: 'ଓଡ଼ିଆ' },
    { code: 'as', label: 'অসমীয়া' },
    { code: 'ur', label: 'اردو' }
  ];

  selectedLanguage = 'en';
  isMenuOpen = false;
  showModal = false;
  email = '';

  private portalId = environment.zohoPortalId;
  private formGuid = environment.zohoFormGuiId;
  private formUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${this.formGuid}`;

  constructor(private http: HttpClient) { }

  submitEmail(email: string) {
    const data = {
      fields: [
        {
          name: 'email',
          value: email
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(this.formUrl, data, { headers }).subscribe((res: any) => {
      this.closeModal();
      this.email = '';
    }, (err: any) => {
      console.log(err);
    })
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(event: any) {
    this.selectedLanguage = event.target.value;
  }

  openModal(event: Event) {
    event.preventDefault();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
