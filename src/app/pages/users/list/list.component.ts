import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }
  fakeData = [
    {
      ci: "1600783946",
      nombre: "Manuel Damián",
      apellido: "Robalino Camino",
      telefono: "0992996436",
      correo: "demiansr96@gmail.com",
      direccion: "Simon Bolivar",
      fechaInicio: "01-23-2021"
    },
    {
      ci: "1600018533",
      nombre: "Manuel Mesias",
      apellido: "Robalino Ballesteros",
      telefono: "0987283946",
      correo: "mesias.robalino1947@outlook.es",
      direccion: "Fátima",
      fechaInicio: "01-23-2021"
    },
    {
      ci: "1600157273",
      nombre: "Ines Margarita",
      apellido: "Camino",
      telefono: "0992996436",
      correo: "margarita.camino1960@gmail.com",
      direccion: "Fátima",
      fechaInicio: "01-23-2021"
    },
    {
      ci: "1600647828",
      nombre: "Cheyene Magaly",
      apellido: "Robalino Camino",
      telefono: "0992996436",
      correo: "cheyenr88@hotmail.com",
      direccion: "Fátima",
      fechaInicio: "01-23-2021"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onGoToSee(user:any):void {
    this.navigationExtras.state = {
      value: user
    };
    this.router.navigate(['user-details'], this.navigationExtras);
  }
  onGoToEdit(user:any):void {
    this.navigationExtras.state = {
      value: user
    };
    this.router.navigate(['user-edit'], this.navigationExtras);
  }
  onGoToDelete(user:any):void {
    let Message: String = 'Borrado';

    alert(Message);
  }
}
