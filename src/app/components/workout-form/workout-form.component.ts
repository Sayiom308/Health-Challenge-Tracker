import { Component } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { User } from '../../models/workout.model';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html'
})
export class WorkoutFormComponent {
  userName = '';
  workoutType = '';
  minutes!: number;
  workoutTypes = ['Running', 'Cycling', 'Yoga', 'Swimming'];

  constructor(private workoutService: WorkoutService) {}

  addWorkout() {
    if (!this.userName || !this.workoutType || !this.minutes) return;

    const users = this.workoutService.getUsers();
    let user = users.find(u => u.name === this.userName);

    if (!user) {
      user = { id: users.length + 1, name: this.userName, workouts: [] };
      users.push(user);
    }

    user.workouts.push({ type: this.workoutType, minutes: this.minutes });
    localStorage.setItem('workoutData', JSON.stringify(users));
  }
}
