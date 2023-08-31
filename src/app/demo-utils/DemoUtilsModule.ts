import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendaHeaderComponent } from './calenda-header/calenda-header.component';

@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule],
  declarations: [CalendaHeaderComponent],
  exports: [CalendaHeaderComponent],
})
export class DemoUtilsModule {}
