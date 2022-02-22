import { User } from './../../../shared/models/user.interface';
import { Component, OnInit } from '@angular/core'
import { NavigationExtras, Router } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  user:User;

  constructor(private router:Router) {
    const navigation = this.router.getCurrentNavigation()
    this.user = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
    if (typeof this.user === 'undefined') {
      // Redirect
      this.router.navigate(['user-list']);
    }
  }

  onGoToEdit():void {
    this.navigationExtras.state = this.user;
    this.router.navigate(['user-edit'], this.navigationExtras);
  }
  onGoBackToList(): void {
    this.router.navigate(['user-list']);
  }
  onDelete():void {
    alert("Borrar");
  }
}
