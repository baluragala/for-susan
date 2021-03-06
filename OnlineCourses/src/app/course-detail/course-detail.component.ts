import { CoursesService } from "./../courses.service";
import { Course } from "./../course.interface";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  courseId;
  course: Course;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
     console.log('CourseDetailComponent');
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.courseId = this.activatedRoute.snapshot.params["courseId"];
    this.course = this.coursesService.getCourseById(this.courseId);
  }

  goToCourses() {
    let page = this.activatedRoute.snapshot.queryParams["page"];
    this.router.navigate(["/courses"], { queryParams: { page: page } });
  }
}
