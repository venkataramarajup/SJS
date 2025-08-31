import { Component, OnInit } from '@angular/core';
import { SpecialEvent, SpecialEventsService } from '../../Services/special-events';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sjs-special-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.scss'
})
export class SpecialEventsComponent implements OnInit {
  events: SpecialEvent[] = [];
  constructor(private specialEventsService: SpecialEventsService) {}
  ngOnInit(): void {
    this.events = this.specialEventsService.getEvents();
  }
}
