import { User } from './../../shared/models/user.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Observable<User[]>;

  private usersCollection: FirestoreCollection<User>;

  constructor() { }
}
