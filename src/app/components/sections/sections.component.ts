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
        description: 'Game changing inconvenience to convenience'
      },
      {
        image: './imgs/buyer/buyerModuleImage2.svg',
        description: 'Insanely Fresh: Fresh vegetables and fruits to home in no time.'
      },
      {
        image: './imgs/buyer/buyerModuleImage3.svg',
        description: ' Our smart app is easy to track your profits '
      },
      {
        image: './imgs/buyer/buyerModuleImage5.svg',
        description: 'No more waiting for days for emergency or urgent orders.'
      },
      {
        image: './imgs/buyer/buyerModuleImage6.svg',
        description: 'Easy ordering!'
      },
      {
        image: './imgs/buyer/buyerModuleImage4.svg',
        description: 'We priorotize food and products that is locally-grown, seasonal and sold from local people.'
      },
      {
        image: './imgs/buyer/deviceImage1.svg',
        description: ''
      },
      {
        image: './imgs/buyer/deviceImage1.svg',
        description: ''
      }
    ],
    Seller: [
      {
        image: './imgs/seller/sellerModuleImage1.svg',
        description: 'Sell more with  increased product offerings and more personal interaction.'
      },
      {
        image: './imgs/seller/sellerModuleImage2.svg',
        description: ' Dont miss the opportunity to boost your livelihood and be a happier, more satisfied seller.'
      },
      {
        image: './imgs/seller/sellerModuleImage3.svg',
        description: 'Our smart app is easy to track your profits.'
      },
      {
        image: './imgs/seller/sellerModuleImage4.svg',
        description: 'We’re here to help you stock up on your produce based on your sales.'
      },
      {
        image: './imgs/seller/deviceImage1.svg',
      },
      {
        image: './imgs/seller/deviceImage2.svg',
      }
    ]
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
