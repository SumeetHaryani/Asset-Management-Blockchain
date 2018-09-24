/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ItemsComponent } from './Items/Items.component';

import { FacultyComponent } from './Faculty/Faculty.component';
import { OfficerComponent } from './Officer/Officer.component';
import { StoreComponent } from './Store/Store.component';
import { PrincipalComponent } from './Principal/Principal.component';

import { faculty_to_officerComponent } from './faculty_to_officer/faculty_to_officer.component';
import { officer_to_principalComponent } from './officer_to_principal/officer_to_principal.component';
import { principal_to_officerComponent } from './principal_to_officer/principal_to_officer.component';
import { officer_to_storeComponent } from './officer_to_store/officer_to_store.component';
import { store_to_officerComponent } from './store_to_officer/store_to_officer.component';
import { officer_to_facultyComponent } from './officer_to_faculty/officer_to_faculty.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Items', component: ItemsComponent },
  { path: 'Faculty', component: FacultyComponent },
  { path: 'Officer', component: OfficerComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'Principal', component: PrincipalComponent },
  { path: 'faculty_to_officer', component: faculty_to_officerComponent },
  { path: 'officer_to_principal', component: officer_to_principalComponent },
  { path: 'principal_to_officer', component: principal_to_officerComponent },
  { path: 'officer_to_store', component: officer_to_storeComponent },
  { path: 'store_to_officer', component: store_to_officerComponent },
  { path: 'officer_to_faculty', component: officer_to_facultyComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
