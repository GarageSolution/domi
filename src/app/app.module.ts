import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorklistComponent } from './components/worklist/worklist.component';
import { TableExpandableRowsExampleComponent } from './components/table-expandable-rows-example/table-expandable-rows-example.component';
import { AddCardsComponent } from './components/add-cards/add-cards.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    WorklistComponent,
    TableExpandableRowsExampleComponent,
    AddCardsComponent,
    CardDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule, ReactiveFormsModule, MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
