import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-starter-kit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './seller-starter-kit.component.html',
  styleUrl: './seller-starter-kit.component.scss'
})
export class SellerStarterKitComponent {
  activeStep = 1;

  storeAssets = [
    { name: 'Store Image', required: true, spec: 'Max 1200px wide, JPG/PNG/WebP', tip: 'A clear photo of your shop, workspace, or a professional image that represents your business', icon: 'store-img' },
    { name: 'Logo', required: false, spec: 'Square image, max 1200px', tip: 'If you have a brand logo, use it. Otherwise skip — your store image will do', icon: 'logo' },
    { name: 'Banner Images', required: false, spec: 'Up to 3 banners, max 1200px wide', tip: 'Showcase offers, seasonal promos, or your best work. Think billboard ads', icon: 'banner' },
    { name: 'Store Videos', required: false, spec: 'Up to 3 videos, max 60 sec, under 25 MB', tip: 'A quick intro video or walkthrough of your shop. MP4 format works best', icon: 'video' },
  ];

  storeFields = [
    { name: 'Store Name', required: true, good: 'Lakshmi Silk Sarees', bad: 'Lakshmi Silk Sarees Wholesale and Retail Clothing Store Est. 2005' },
    { name: 'Description', required: true, good: 'Handpicked Kanchipuram and Banarasi silk sarees for every occasion. Trusted by 500+ families since 2005.', bad: 'We sell all types of sarees and clothing items at best prices in town. Visit us for more details and offers. We do wholesale also.' },
    { name: 'Tagline', required: false, good: 'Pure silk, pure tradition', bad: 'Best quality silk sarees at lowest prices guaranteed' },
  ];

  productNaming = [
    { good: 'Kanchipuram Silk Saree - Maroon', bad: 'Beautiful handwoven traditional saree in nice maroon colour very premium quality' },
    { good: 'Wooden Cutting Board - Large', bad: 'Cutting Board' },
    { good: 'Organic Honey - 500g', bad: 'Pure Natural Organic Honey From Farms Fresh Quality 500 grams bottle' },
    { good: "Men's Cotton Kurta - White", bad: 'Kurta for men white color cotton material' },
  ];

  variantExamples = [
    { business: 'Clothing', variants: 'S, M, L, XL, XXL', prices: '599, 599, 649, 699, 749' },
    { business: 'Grocery', variants: '250g, 500g, 1kg', prices: '120, 220, 420' },
    { business: 'Bakery', variants: 'Regular, Eggless', prices: '450, 500' },
    { business: 'Jewellery', variants: 'Gold Plated, Silver', prices: '1200, 800' },
  ];

  serviceVariantExamples = [
    { service: 'Haircut', variant: "Men's Basic", duration: '30 min', price: '200' },
    { service: 'Haircut', variant: "Men's Premium", duration: '45 min', price: '400' },
    { service: 'AC Service', variant: 'Basic Service', duration: '60 min', price: '500' },
    { service: 'AC Service', variant: 'Deep Clean', duration: '120 min', price: '1200' },
    { service: 'Photography', variant: '1 Hour Session', duration: '60 min', price: '5,000' },
    { service: 'Photography', variant: 'Half Day', duration: '240 min', price: '15,000' },
  ];

  imageChecklist = [
    { title: 'Hero shot', desc: 'Main image — front view, clean background' },
    { title: 'Detail shots', desc: 'Close-ups of texture, material, labels' },
    { title: 'Scale shot', desc: 'Product in use or next to a familiar object' },
    { title: 'Variant shots', desc: 'Photograph each color/size option' },
  ];

  checklist = [
    'Store name and description written down',
    'Store image ready (clear, well-lit photo)',
    'Logo ready (if you have one)',
    'List of all products/services to add',
    'For each item: name, description, 3-10 photos',
    'Variants listed with names and prices',
    'Category identified for each item',
    'UPI ID ready for payments',
  ];

  setStep(step: number) {
    this.activeStep = step;
  }
}
