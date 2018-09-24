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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
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

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    FacultyComponent,
    OfficerComponent,
    StoreComponent,
    PrincipalComponent,
    faculty_to_officerComponent,
    officer_to_principalComponent,
    principal_to_officerComponent,
    officer_to_storeComponent,
    store_to_officerComponent,
    officer_to_facultyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
