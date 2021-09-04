import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { WorklistComponent } from './components/worklist/worklist.component';
import { TableExpandableRowsExampleComponent } from './components/table-expandable-rows-example/table-expandable-rows-example.component';
import { AddCardsComponent } from './components/add-cards/add-cards.component'
import { CardDetailsComponent } from './components/card-details/card-details.component'
import { SupervisorComponent } from './components/supervisor/supervisor.component'
import { QualityCheckComponent } from './components/quality-check/quality-check.component'
import { AuthGuard } from '../app/helpers';
import { Role } from '../app/models';


// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login' },
//   { path: 'login', component: LogInComponent },
//   { path: '', component: DashboardComponent,canActivate: [AuthGuard] },
//   { path: 'worklist', component: WorklistComponent },
//   { path: 'Expandable', component: TableExpandableRowsExampleComponent },
//   { path: 'AddCards', component: AddCardsComponent ,canActivate: [AuthGuard]},
//   { path: 'Carddetails', component: CardDetailsComponent },
//   { path: 'Supervisor', component: SupervisorComponent },
//   { path: 'QualityCheck', component: QualityCheckComponent},
//   { path: '**', redirectTo: '' }
// ];
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AddCards',
    component: AddCardsComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'login',
    component: LogInComponent
  },
  { path: 'Carddetails', component: CardDetailsComponent, canActivate: [AuthGuard] },
  {
    path: 'Supervisor', component: SupervisorComponent, canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'QualityCheck', component: QualityCheckComponent, canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
