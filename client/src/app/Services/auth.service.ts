import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
//TODO: add more functions
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async signUp(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async signIn(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    return await this.afAuth.signOut();
  }

  get currentUser() {
    return this.afAuth.authState;
  }
}
