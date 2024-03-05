import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: string[] = [];
  completedTasks: string[] = [];
  newTask: string = '';
  sameTask = false
  nullTask = false

  addTask() {
    if (this.newTask.trim() !== '' && !this.tasks.includes(this.newTask.trim())) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    } else {
      if(this.tasks.includes(this.newTask.trim())) {
        this.sameTask = true
        setTimeout(() => {
          this.sameTask = false
        }, 2000)
      }
      if(this.newTask.trim()=== '') {
        this.nullTask = true
        setTimeout(() => {
          this.nullTask = false
        }, 2000)
      }
    }
  }

  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  deleteCompletedTask(task: string) {
    const index = this.completedTasks.indexOf(task);
    if (index !== -1) {
      this.completedTasks.splice(index, 1);
    }
  }

  completeTask(task: string) {
      const index = this.tasks.indexOf(task);
      this.completedTasks.push(task);
      this.tasks.splice(index, 1);
  }
}
