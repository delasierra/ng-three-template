import { Component, OnInit } from '@angular/core';
import { TweenMax, Ease, TimelineMax } from 'gsap';

@Component({
  selector: 'app-main-animations',
  templateUrl: './main-animations.component.html',
  styleUrls: ['./main-animations.component.scss']
})
export class MainAnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let tl = new TimelineMax(); // this is free of errors now
    // tl.from(targetObject, 1, { x:400 });
    // tl.play();
  }

}
