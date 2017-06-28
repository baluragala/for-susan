import { Courses2Service } from './../courses2.service';
import { CoursesService } from './../courses.service';
import { Component, OnInit, Inject } from "@angular/core";
import { Course } from "../course.interface";


@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  enrolledCourses: string[] = [];
  isDataFetched:boolean=false;
  

  constructor(private coursesService:CoursesService /*CoursesService*/,
  @Inject("API_KEY") private keyApi:string) {
    console.log(coursesService,typeof(keyApi));
    console.log('CourseListComponent', 'apiKey :' + this.keyApi);
    
  }

  ngOnInit() {

    setTimeout(() => {
      this.isDataFetched = true;
      this.courses = this.coursesService.getCourses();
    }, 2000);
  }

  onEnrollRequest(params: string) {
    this.enrolledCourses.push(params);
  }
}
