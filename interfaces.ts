interface Course {
    title:string;
    desc:string;
    price:number;
    discount?:number;
}

// class Course1{
//     title:string;
//     desc:string;
//     price:number;
//     constructor(title,desc,price){
//         this.title=title;
//         this.desc=desc;
//         this.price=price;
//     }
// }

// let course1:Course1 = new Course1('Angular','Front end framework by google',200);

// console.log(course1)

let course:Course = {
    title:'Angular',
    desc:'Front end framework by google',
    price:200,
    discount:10
}

console.log(course)

let printCourse = (course:Course) => {
    console.log(course.title.toUpperCase())
}

printCourse({title:'angular',desc:'by google',price:200});

/*
Error 0:

Type '{}' is not assignable to type '{ title: string; desc: string; price: number; }'.
  Property 'title' is missing in type '{}'.


Error 1:
[ts]
Type '{}' is not assignable to type 'Course'.
  Property 'title' is missing in type '{}'.
let course: Course

*/

//duck typing