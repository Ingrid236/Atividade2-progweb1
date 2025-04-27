import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbar} from '@angular/material/toolbar';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import { ExperienceFormComponent } from './curriculum/experience-form/experience-form.component';
import { ExperienceListComponent } from './curriculum/experience-list/experience-list.component';
import { CurriculumComponent } from './curriculum/curriculum/curriculum.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/select';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatDatepickerInput} from '@angular/material/datepicker';
import {MatDatepickerToggle} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceFormComponent,
    ExperienceListComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    NgOptimizedImage,
    MatButton,
    MatCard,
    MatCardTitle,
    MatDivider,
    MatFormField,
    MatInput,
    MatIcon,
    MatSelect,
    MatOption,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatLabel,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatCardActions,
    MatCardHeader,
    MatCardContent,
    MatCheckbox,
    MatCardSubtitle,
    MatButtonToggleGroup,
    MatButtonToggle,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
