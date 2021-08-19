import { Component, OnInit } from '@angular/core';
import { horizontalNavigation } from '../data/navigation.constant';

@Component({
  selector: 'zelo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationItem = horizontalNavigation;

  constructor() { }

  ngOnInit(): void {
  }

}
