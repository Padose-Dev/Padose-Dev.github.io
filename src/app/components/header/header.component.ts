import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'mr', label: 'मराठी' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'or', label: 'ଓଡ଼ିଆ' },
    { code: 'as', label: 'অসমীয়া' },
    { code: 'ur', label: 'اردو' }
  ];

  selectedLanguage = 'en';
  showModal = false;
  email = '';
  isMobileView = false;

  private portalId = environment.hubspotPortalId;
  private formGuid = environment.hubspotFormGuiId;
  private formUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${this.formGuid}`;

  constructor(
    private http: HttpClient, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  ngOnInit(): void {
    this.checkScreenSize();
    console.log(this.isMobileView);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth <= 768;
    }
  }

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

    this.http.post(this.formUrl, data, { headers }).subscribe({
      next: () => {
        this.closeModal();
        this.email = '';
      },
      error: (err: unknown) => {
        console.log(err);
      }
    });
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

  onMobileNavSelect(event: Event): void {
    alert(event)
    const value = (event.target as HTMLSelectElement).value;

    switch (value) {
      case 'about':
        console.log('Navigate to About');
        break;
      case 'features':
        console.log('Navigate to Features');
        break;
      case 'home':
        this.router.navigate(['/']);
        break;
      case 'terms-and-conditions':
        this.router.navigate(['/terms-and-conditions']);
        break;
      case 'cancellation-refund-policy':
        this.router.navigate(['/cancellation-refund-policy']);
        break;
      case 'contact-us':
        this.router.navigate(['/contact-us']);
        break;
      default:
        break;
    }
  }
}