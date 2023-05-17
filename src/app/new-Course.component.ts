
import {Component} from '@angular/core';
import { saiServicesBhargav } from './serviceCourses.service';

@Component({
    selector:'courses',
    template:`
    <p>This ia all list of courses</p>
    <ul>
    <li *ngFor="let courser of allCourses">
    {{courser}}
    </li>
    </ul>
    `
})

export class CoursesComponent{
    title="These are the specified courses";
    allCourses;

    constructor(service : saiServicesBhargav){
        this.allCourses=service.getCourses();  


    }    
}
