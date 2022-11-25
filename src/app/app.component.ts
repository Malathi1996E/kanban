import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';

enableRipple(true);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('element') tabInstance: TabComponent | undefined;
  public data: Object[] = kanbanData;
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id'
  };
}