import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss'
})
export class SectionsComponent {
  selectedCategory: string = 'Seller';

  data: any = {
    Buyer: [
      {
        image: './imgs/buyer/buyerModuleImage1.svg',
        description: 'Sell more with increased product offerings and personal interaction.'
      },
      {
        image: './imgs/buyer/buyerModuleImage2.svg',
        description: 'Don\'t miss the opportunity to boost your livelihood.'
      },
      {
        image: './imgs/buyer/buyerModuleImage3.svg',
        description: 'Sell more with increased product offerings and personal interaction.'
      },
      {
        image: './imgs/buyer/buyerModuleImage5.svg',
        description: 'Don\'t miss the opportunity to boost your livelihood.'
      },
      {
        image: './imgs/buyer/buyerModuleImage6.svg',
        description: 'Sell more with increased product offerings and personal interaction.'
      },
      {
        image: './imgs/buyer/buyerModuleImage4.svg',
        description: 'Don\'t miss the opportunity to boost your livelihood.'
      },
      {
        image: './imgs/buyer/deviceImage1.svg',
        description: 'Sell more with increased product offerings and personal interaction.'
      },
      {
        image: './imgs/buyer/deviceImage1.svg',
        description: 'Don\'t miss the opportunity to boost your livelihood.'
      }
    ],
    Seller: [
      {
        image: './imgs/seller/sellerModuleImage1.svg',
        description: 'Sell more with increased product offerings and personal interaction.'
      },
      {
        image: './imgs/seller/sellerModuleImage2.svg',
        description: 'Don\'t miss the opportunity to boost your livelihood.'
      },
      {
        image: './imgs/seller/sellerModuleImage3.svg',
        description: 'Sell more with increased product offerings and personal interaction.'
      },
      {
        image: './imgs/seller/sellerModuleImage4.svg',
        description: 'Don\'t miss the opportunity to boost your livelihood.'
      },
      {
        image: './imgs/buyer/deviceImage1.svg',
      },
      {
        image: './imgs/buyer/deviceImage2.svg',
      }
    ]
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
