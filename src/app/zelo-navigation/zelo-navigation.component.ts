import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { horizontalNavigation } from '../data/navigation.constant';


@Component({
  selector: 'zelo-zelo-navigation',
  templateUrl: './zelo-navigation.component.html',
  styleUrls: ['./zelo-navigation.component.scss']
})
export class ZeloNavigationComponent implements OnInit {
  navigationItem = horizontalNavigation;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

}
