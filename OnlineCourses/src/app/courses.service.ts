import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class CoursesService {
  courses = [
    // { id: 1, title: "angular", desc: "by google" },
    // { id: 2, title: "react", desc: "by fb" },
    // { id: 3, title: "vue", desc: "by comm" },
    // { id: 4, title: "native script", desc: "by telerik" },
    // { id: 5, title: "angular1", desc: "by google" },
    // { id: 6, title: "react1", desc: "by fb" },
    // { id: 7, title: "vue1", desc: "by comm" },
    // { id: 8, title: "native script1", desc: "by telerik" }
  ];

  constructor(private http: Http) {
    console.log("CoursesService is instantiated.");
  }

  getCourses() {
    return this.http
      .get("http://localhost:3000/courses")
      .map(response => response.json());
  }

  addCourse(course) {
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post("http://localhost:3000/courses", course, options)
      .map(response => response.json());
  }

  updateCourse() {}

  deleteCourse() {}

  getCourseById(id: number) {
    return this.courses.filter(c => c.id == id)[0];
  }
}
