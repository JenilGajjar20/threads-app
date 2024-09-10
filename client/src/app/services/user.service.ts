import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { environment } from '../environment';
import { User } from '../interface/user.interface';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private platformId: any;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.platformId = platformId;
  }

  http = inject(HttpClient);
  localStorageKey = 'threads_user';

  createUser(name: string) {
    return this.http.post<User>(`${environment.apiBaseUrl}/users`, {
      name,
    });
  }

  saveUserToStorage(user: User) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    } else {
      console.log('Not running in a browser context');
    }
  }

  getUserFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem(this.localStorageKey);
      return user ? (JSON.parse(user) as User) : null;
    } else {
      return null;
    }
  }
}
