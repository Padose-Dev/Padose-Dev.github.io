import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  lastUpdated = '05-11-2025 14:44:58';
  
  contactInfo = {
    merchantName: 'PEOPLE TECH VENTURES',
    registeredAddress: '79-20-12/28 heritage regency, postal colony, syamalanagar s.o, rajahmundry (urban), andhra pradesh, india, 533103',
    city: 'Rajahmundry (Urban)',
    state: 'ANDHRA PRADESH',
    pin: '533103',
    telephone: '9739960092',
    email: 'phanikumaryadavilli@gmail.com'
  };
}

