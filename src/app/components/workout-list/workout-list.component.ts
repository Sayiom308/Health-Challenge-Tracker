import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { User } from '../../models/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html'
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText = '';
  filterType = '';
  workoutTypes = ['Running', 'Cycling', 'Yoga', 'Swimming'];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.users = this.workoutService.getUsers();
    this.filteredUsers = this.users;
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.filterType ? user.workouts.some(w => w.type === this.filterType) : true)
    );
  }
}
