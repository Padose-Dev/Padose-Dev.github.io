import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getCountFromServer, Timestamp } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp | null = null;
  private db: Firestore | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.app = initializeApp(environment.firebaseConfig);
      this.db = getFirestore(this.app);
    }
  }

  async addSellerEnquiry(data: Record<string, unknown>): Promise<void> {
    if (!this.db) return;
    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data)) {
      sanitized[key] = typeof value === 'string' ? this.sanitize(value) : value;
    }
    const colRef = collection(this.db, 'seller-enquiries');
    await addDoc(colRef, {
      ...sanitized,
      createdAt: Timestamp.now(),
      status: 'new'
    });
  }

  private sanitize(value: string): string {
    return value.replace(/<[^>]*>/g, '').trim();
  }

  async getEnquiryCount(): Promise<number> {
    if (!this.db) return 0;
    const colRef = collection(this.db, 'seller-enquiries');
    const snapshot = await getCountFromServer(colRef);
    return snapshot.data().count;
  }
}
