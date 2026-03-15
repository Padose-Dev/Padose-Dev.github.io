import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seller-policy.component.html',
  styleUrls: ['./seller-policy.component.scss']
})
export class SellerPolicyComponent {
  lastUpdated = '15-03-2026 00:00:00';
}
