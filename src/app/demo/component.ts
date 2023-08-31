import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { colors } from '../demo-utils/color';
import { de } from 'date-fns/locale';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html',
  styles: [
    `
      .drag-active {
        position: relative;
        z-index: 1;
        pointer-events: none;
      }
      .drag-over {
        background-color: #eee;
      }
    `,
  ],
})
export class DemoComponent {
  CalendarView = CalendarView;

  view = CalendarView.Month;

  viewDate = new Date();

  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date(),
      allDay: true,
      end: new Date(),
      draggable: true,
    },
    {
      title: 'Event 2',
      color: colors.blue,
      start: new Date(),allDay: true,
      end: new Date(),
      draggable: true,
    },
  ];

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;

  refresh = new Subject<void>();

  /*eventDropped({
    event,
    newStart,
    newEnd,
    allDay,
  }: CalendarEventTimesChangedEvent): void {
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    const newEvent = {
      ...event,
      start: newStart,
      end: newEnd || event.end
    };
    this.events.push(newEvent);
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
  }*/

  eventDropped(event: any): void {
    console.log('Dropped event:', event.title);
    console.log('New start time:', event.newStart);
    
    if (event.newEnd) {
      console.log('New end time:', event.newEnd);
    } else {
      console.log('Original end time:', event.event.end);
    }
    
    if (typeof event.allDay !== 'undefined') {
      console.log('All day event:', event.allDay);
    } else {
      console.log('Is all day event:', event.event.allDay);
    }
    
    // Check if there is already an event with the same start time
    const existingEvent = this.events?.find(e => e.title === event.event.title);
    if (existingEvent) {
      // If there is, update the existing event instead of adding a new one
      console.log('already exists');
      return;
    } else {
      // If there isn't, create a new event with an array of dates
      const newEvent: any = {
        ...event.event,
        start: event.newStart,
        end: event.newEnd || event.event.end,
        dates: [event.newStart],
      };
      this.events?.push(newEvent);
    }
    
    if (this.view === 'month') {
      this.viewDate = event.newStart;
      this.activeDayIsOpen = true;
    }
  }
  

  externalDrop(event: CalendarEvent) {
    if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.externalEvents.push(event);
    }
  }
}
