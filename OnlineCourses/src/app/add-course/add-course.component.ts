import { CoursesService } from "./../courses.service";
import { Course } from "./../course.interface";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  course: Course;
  invalidTitle;
  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.course = { title: "", desc: "", id: 10 };
    //setTimeout(() => {
    //this.course.title = "Ext 6";
    //}, 1000);
  }

  ngDoCheck() {
    console.log(this.course);
    if (this.course.title == "Ext 20") {
      this.invalidTitle = true;
    }
  }

  saveForm(form: NgForm) {
    console.log(form.value);
    this.courseService
      .addCourse(form.value)
      .subscribe(course => console.log(course));
  }
}
