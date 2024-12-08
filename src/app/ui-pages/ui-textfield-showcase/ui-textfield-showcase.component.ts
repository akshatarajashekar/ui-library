import { Component } from '@angular/core';
import { UiTextfieldComponent } from 'app/ui-lib/ui-textfield/ui-textfield.component';

@Component({
  selector: 'app-ui-textfield-showcase',
  standalone: true,
  imports: [UiTextfieldComponent],
  templateUrl: './ui-textfield-showcase.component.html',
  styleUrl: './ui-textfield-showcase.component.scss'
})
export class UiTextfieldShowcaseComponent {
  onTextfieldInput(event: any) {
    console.log(event.changeEvent.target.value);
  }
}
