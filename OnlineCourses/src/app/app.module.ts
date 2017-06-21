import { CourseActiveGaurdService } from './course-active-gaurd.service';
import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"

import { AppComponent } from './app.component';

import { CoursePreviewComponent } from './course-preview.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursePreviewComponent,
    CourseListComponent,
    CourseDetailComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [CourseActiveGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
