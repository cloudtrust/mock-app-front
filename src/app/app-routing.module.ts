import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocComponent } from './poc/poc.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
  { path: '', redirectTo: '/poc', pathMatch: 'full' },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'files', component: FilesComponent },
  { path: 'poc', component: PocComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}