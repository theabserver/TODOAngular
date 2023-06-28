import { Component, NgModule } from '@angular/core';
import { BoxComponent } from './component/Box/Box.component';
import { AppModule } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TODO';
}
