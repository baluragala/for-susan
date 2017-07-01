import { AddUserComponent } from './add-user/add-user.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseActiveGaurdService } from './course-active-gaurd.service';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { HomeComponent } from "./home/home.component";
import { Route } from "@angular/router";

export const APP_ROUTES: Route[] = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "courses",
    component: CourseListComponent
  },
  {
    path: "courses/:courseId",
    component: CourseDetailComponent,
    canActivate: [CourseActiveGaurdService]
  },
  {
    path: "add-course",
    component: AddCourseComponent,
  },
  {
    path: "add-user",
    component: AddUserComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
