import { Injectable } from '@angular/core';
import { User } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private storageKey = 'workoutData';

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    if (!localStorage.getItem(this.storageKey)) {
      const initialData: User[] = [
        { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] },
        { id: 2, name: 'Jane Smith', workouts: [{ type: 'Cycling', minutes: 45 }] },
        { id: 3, name: 'Mike Johnson', workouts: [{ type: 'Yoga', minutes: 50 }] },
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialData));
    }
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addUser(user: User) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}

