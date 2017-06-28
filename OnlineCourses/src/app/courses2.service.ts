import { Injectable } from "@angular/core";

@Injectable()
export class Courses2Service {
  courses = [
    { id: 1, title: "angular2", desc: "by google" },
    { id: 2, title: "react2", desc: "by fb" },
    { id: 3, title: "vue2", desc: "by comm" },
    { id: 4, title: "native script2", desc: "by telerik" },
    { id: 5, title: "angular21", desc: "by google" },
    { id: 6, title: "react21", desc: "by fb" },
    { id: 7, title: "vue21", desc: "by comm" },
    { id: 8, title: "native script21", desc: "by telerik" }
  ];

  constructor() {}

  getCourses() {
    return this.courses;
  }

  addCourse() {}

  updateCourse() {}

  deleteCourse() {}

   getCourseById(id: number) {
    return this.courses.filter(c => c.id == id)[0];
  }
}
