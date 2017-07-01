import { Component, ViewEncapsulation, ViewChild } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'OnlineCourses App';
  className="header"
  @ViewChild('header') header;

  changeClass(){
    this.className = 'subheader'
  }

  ngDoCheck(){
    //console.log(this.header.nativeElement.innerText);
  }

  email(header){
    console.log(this.header.nativeElement.innerText)
  }
}