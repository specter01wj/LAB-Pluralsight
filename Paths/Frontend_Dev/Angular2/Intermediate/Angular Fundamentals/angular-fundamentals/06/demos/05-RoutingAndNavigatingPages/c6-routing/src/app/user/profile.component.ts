import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onCancel(): void {
    this._router.navigate(['/events']);
  }

}
