import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  constructor(private router:Router){}

  gui(data:any){
    console.log(data)
    this.router.navigate(['gui'],{ state: { data } });
  }
}
