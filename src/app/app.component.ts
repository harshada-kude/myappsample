import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public name = 'Harshada';
public hasError = true;
public highlightColor = "orange";
public titleStyles = {
  color: "blue",
  fontStyle: "italic"
}
}
