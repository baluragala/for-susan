import { environment } from "./../environments/environment.prod";
import { Courses2Service } from "./courses2.service";
import { CoursesService } from "./courses.service";
import { CourseActiveGaurdService } from "./course-active-gaurd.service";
import { APP_ROUTES } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { CoursePreviewComponent } from "./course-preview.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { AddUserComponent } from "./add-user/add-user.component";
import {HttpModule} from "@angular/http"

// export function factory(env: string, apiKey: string) {
//   if (env === "DEV") {
//     return new CoursesService();
//   } else {
//     return new Courses2Service();
//   }
// }

// { provide: CoursesService, useClass: Courses2Service },
@NgModule({
  declarations: [
    AppComponent,
    CoursePreviewComponent,
    CourseListComponent,
    CourseDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddCourseComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CourseActiveGaurdService,
    // { provide: CourseActiveGaurdService, useClass: CourseActiveGaurdService },
    { provide: "API_KEY", useValue: "fadslkf65alkfjkalj$erg778" },
    { provide: "ENV", useValue: "DEV" },
    {
      provide: CoursesService,
      useClass: CoursesService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
