import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  activeCategory: 'general' | 'buyer' | 'seller' = 'general';
  openIndex: number | null = null;

  faqs: Record<string, Array<{ question: string; answer: string }>> = {
    general: [
      {
        question: 'What is Padose?',
        answer: 'Padose is a community-driven marketplace platform that connects local buyers with street vendors, local shops, and service providers in their neighborhood. It provides a digital platform for sellers to list products and services, and for buyers to discover, order, and get deliveries from trusted local vendors.'
      },
      {
        question: 'Is Padose free to use?',
        answer: 'Yes! Padose is completely free for both buyers and sellers. There are no registration fees, subscription costs, or commission charges. We believe in empowering local commerce without adding financial burden.'
      },
      {
        question: 'Where is Padose available?',
        answer: 'Padose is currently available across India. We are actively expanding to new cities and communities. Download the app to check if your neighborhood has an active community marketplace.'
      },
      {
        question: 'How do I download the Padose app?',
        answer: 'You can download the Padose app from the Google Play Store. Search for "Padose" or click the download link on our website. iOS version is coming soon.'
      },
      {
        question: 'What types of products and services are available?',
        answer: 'Padose supports a wide range of categories including fresh produce, groceries, street food, home services, beauty & wellness, tutoring, handmade crafts, clothing, electronics repair, fitness & yoga, pet services, photography, and more. If a category is not available, sellers can request new categories.'
      },
      {
        question: 'How does the community system work?',
        answer: 'Communities in Padose represent neighborhoods or localities. Both buyers and sellers join their community to participate in a hyper-local marketplace. This ensures you discover vendors who are nearby and can provide fast service or delivery.'
      }
    ],
    buyer: [
      {
        question: 'How do I place an order?',
        answer: 'Simply browse products or services, add items to your cart, proceed to checkout, enter your delivery address, and place the order. You can shop from multiple sellers in a single checkout. The seller will confirm your order and provide updates on delivery.'
      },
      {
        question: 'Can I book services through Padose?',
        answer: 'Yes! Many sellers offer services like tutoring, home repair, beauty treatments, fitness classes, and more. You can view available time slots, select your preferred date and time, and book directly through the app.'
      },
      {
        question: 'How do I track my order?',
        answer: 'Once you place an order, you can track its status in real-time from the Orders section. You\'ll see updates as the order moves through stages: Pending, Confirmed, Shipped/On the way, and Delivered. You\'ll also receive push notifications for status changes.'
      },
      {
        question: 'Can I chat with sellers?',
        answer: 'Absolutely! Padose has a built-in messaging system that lets you chat directly with sellers. You can ask questions about products, negotiate prices, request custom orders, or discuss delivery details.'
      },
      {
        question: 'What is Pulse (video feed)?',
        answer: 'Pulse is a short-form video feed within Padose where sellers share videos showcasing their products, cooking processes, behind-the-scenes content, and more. It\'s a fun way to discover new sellers and products in your community.'
      },
      {
        question: 'How do I save items for later?',
        answer: 'You can add any product or service to your Wishlist by tapping the heart icon. You can also Follow stores to get updates whenever they add new products or run promotions.'
      },
      {
        question: 'What payment methods are supported?',
        answer: 'Payment methods vary by seller and may include UPI, payment gateway links, cash on delivery, and other options configured by the seller. The available options will be shown during checkout.'
      }
    ],
    seller: [
      {
        question: 'How do I register as a seller?',
        answer: 'Visit our Seller Onboarding page or download the Padose Seller app. You\'ll need to provide your mobile number for OTP verification, business name, category, and basic details. The entire process takes less than 5 minutes.'
      },
      {
        question: 'What can I sell on Padose?',
        answer: 'You can sell both products and services. Products include anything from fresh vegetables and homemade food to clothing and crafts. Services include tutoring, home repair, beauty services, fitness classes, photography, and more. You can also offer courses and workshops.'
      },
      {
        question: 'How do I manage my store?',
        answer: 'The Padose Seller app provides a complete dashboard to manage your store. You can add/edit products and services, manage orders, set availability schedules, view analytics, handle customer messages, and configure payment methods — all from your phone.'
      },
      {
        question: 'How do I get paid?',
        answer: 'You can set up your preferred payment method: UPI ID, payment gateway, or payment links. Payments go directly to you from buyers. Padose does not hold or process your payments — you receive them directly.'
      },
      {
        question: 'Can I manage my availability schedule?',
        answer: 'Yes! You can set weekly operating hours (e.g., Monday-Saturday 9 AM - 6 PM), block specific dates for holidays or events, and manage time slots for service bookings. This is especially useful for service providers.'
      },
      {
        question: 'How do I track my business performance?',
        answer: 'The seller dashboard provides detailed analytics including revenue tracking, order statistics, customer engagement metrics, popular products/services, and growth insights. You can use these to make data-driven decisions about your business.'
      },
      {
        question: 'Can I offer discounts and promotions?',
        answer: 'Yes! You can set percentage or flat discounts on individual products and services, set expiry dates for promotions, and toggle featured status to boost visibility. Promoted items appear more prominently in buyer search results.'
      },
      {
        question: 'How do I handle orders?',
        answer: 'New orders appear in your Orders section with a notification. You can review order details, confirm orders, update status (preparing, shipped, delivered), and generate invoices. The buyer is notified at each status change.'
      }
    ]
  };

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  switchCategory(cat: 'general' | 'buyer' | 'seller'): void {
    this.activeCategory = cat;
    this.openIndex = null;
  }

  get currentFaqs() {
    return this.faqs[this.activeCategory];
  }
}
