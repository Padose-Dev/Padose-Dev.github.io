import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class HeroComponent {

  selectedLanguage = 'en';
  showModal = false;
  email = '';
  isMobileView = false;

  private portalId = environment.hubspotPortalId;
  private formGuid = environment.hubspotFormGuiId;
  private formUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${this.formGuid}`;

  constructor(
    private http: HttpClient,
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
      context: isPlatformBrowser(this.platformId) ? {
        pageUri: window.location.href,
        pageName: document.title
      } : {
        pageUri: '',
        pageName: ''
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
    const value = (event.target as HTMLSelectElement).value;

    switch (value) {
      case 'about':
        console.log('Navigate to About');
        break;
      case 'features':
        console.log('Navigate to Features');
        break;
      case 'get-onboarded':
        console.log('Navigate to Get Onboarded');
        break;
      default:
        break;
    }
  }
}
