import { Component, ViewEncapsulation, Input } from "@angular/core";
/*
1. Template
2. Class
3. Metadata
*/

@Component({
  selector: "app-course-preview",
  template: `<div (click)="changeClass()">
    <h3 [class]='className' id="hdr">{{ price }}</h3>
    <p class='desc'>{{desc}}</p>
</div>`,
  styles: [
    `.header{
    color:purple
}
 `
 ,
    `
 .desc {
     color: maroon
 }
 `,
 `.subheader{
    color:red
}
 `
  ]
})
export class CoursePreviewComponent {
  title: string = "Vue.js, emerging client side library";
  desc: string = "An open source front end app library";
  price:number = 100;


  @Input('customClassName')className:string;

  courseTitles:string[] = ['angular','react','vue.js']
  course = {
    title: this.title,
    desc: this.desc
  };

  changeClass(){
      this.className = 'header';
  }
}
