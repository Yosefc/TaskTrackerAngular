import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks: Array<object> = [
    { title: 'Go to dentist', date: '10/09/2021', done: false },
    { title: 'Go to dentist', date: '10/09/2021', done: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
