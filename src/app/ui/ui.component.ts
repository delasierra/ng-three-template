import { Component, OnInit } from '@angular/core';
import { TweenMax, Ease, TimelineMax } from 'gsap';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: []
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let tl = new TimelineMax(); // this is free of errors now
    // tl.from(targetObject, 1, { x:400 });
    // tl.play();
  }

}
