import { Component, OnInit } from "@angular/core";
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

  constructor() {}

  ngOnInit() {

    setTimeout(() => {
      this.isDataFetched = true;
      this.courses = [
        { id: 1, title: "angular", desc: "by google" },
        { id: 2, title: "react", desc: "by fb" },
        { id: 3, title: "vue", desc: "by comm" },
        { id: 4, title: "native script", desc: "by telerik" }
      ];
    }, 2000);
  }

  onEnrollRequest(params: string) {
    this.enrolledCourses.push(params);
  }
}
