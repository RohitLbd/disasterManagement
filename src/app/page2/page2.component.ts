import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [],
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
