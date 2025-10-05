import { Injectable } from "@angular/core";


export interface SpecialEvent {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

@Injectable({
    providedIn: 'root'
})

export class SpecialEventsService {
    private events: SpecialEvent[] = [
    { id: 1, title: 'Event 1', description: 'Description 1Description 1Description 1Description 1Den 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-20' },
    { id: 2, title: 'Event 2', description: 'Description 2', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-21' },
    { id: 3, title: 'Event 3', description: 'Description 3 Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-22' },
    { id: 4, title: 'Event 4', description: 'Description 4', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-23' },
    { id: 5, title: 'Event 5', description: 'Description 1', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-24' },
    { id: 6, title: 'Event 6', description: 'Description 2', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-30' },
    { id: 7, title: 'Event 7', description: 'Description 3', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-31' },
    { id: 8, title: 'Event 8', description: 'Description 4 Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4', imageUrl: 'assets/images/sjs_logo.png', date: '2028-09-27' },
    // ... more events
  ];

  getEvents(): SpecialEvent[] {
    const todayDate = new Date();
    this.events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.events = this.events.filter(event => new Date(event.date) >= todayDate);
    return this.events;
  }

  getTopEvents(count: number = 3): SpecialEvent[] {
    if (count > this.events?.length) {
      count = this.events.length;
    }
    if (count <= 0 || this.events.length === 0) {
      return [];
    }
    if (count <= this.events?.length) {
      count = this.events.filter(event => new Date(event.date) >= new Date()).length;
    }
    return this.events.slice(0, count);
  }


}