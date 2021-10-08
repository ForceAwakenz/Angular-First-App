import {Component} from '@angular/core';

@Component ({
    selector: 'app-target',
    templateUrl: './target.component.html',
    styleUrls: ['./target.component.css']
})

export class TargetComponent {
    searchProvider = 'Google';
    searchUrl = 'https://www.google.com';
}
