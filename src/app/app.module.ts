import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendaHeaderComponent } from './demo-utils/calenda-header/calenda-header.component';
import { DemoModule } from './demo/DemoModule';
import { DemoUtilsModule } from './demo-utils/DemoUtilsModule';
@NgModule({
  declarations: [
    AppComponent,
    // CalendaHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoModule,
    DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
