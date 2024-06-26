import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    opened: boolean = false;
    showFiller = false;
    mobileQuery: MediaQueryList | undefined;

  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    if(this.opened)
      this.openSidebar();
    }

  openSidebar(){
    this.opened = !this.opened;
  }
  

}

