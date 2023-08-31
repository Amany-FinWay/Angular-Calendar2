import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DemoUtilsModule } from '../demo-utils/DemoUtilsModule';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DragAndDropModule,
    DemoUtilsModule,
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent],
})
export class DemoModule {}