import { Component, ViewEncapsulation, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "./course.interface";
/*
1. Template
2. Class
3. Metadata
*/

@Component({
  selector: "app-course-preview",
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css']
})
export class CoursePreviewComponent {
  title: string = "Vue.js, emerging client side library";
  desc: string = "An open source front end app library";
  price: number = 100;

  @Input() course: Course;

  @Input("customClassName") className: string;
  courseTitles: string[] = ["angular", "react", "vue.js"];

  @Output() onEnroll:EventEmitter<string> = new EventEmitter();
 
  changeClass() {
    this.className = "header";
  }

  onCourseEnrollClick(x:string){
    //alert('You have enrolled for :' + x);
    this.onEnroll.emit(x);
  }
}


// function printCourse(course:Course){
//   console.log(' Title : ' + course.title);
// }



// printCourse({id:1,title:'angular', desc:'by google'})
// printCourse({id:2,title:'react', desc:'by fb'})
// printCourse({id:3,title:'vue', desc:'by comm'})