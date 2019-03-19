import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'src/components/query-builder/query-builderconfig.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularQueryBuilder';

  query = {
    condition: 'and',
    rules: [
      { field: 'agentTaskNum', operator: '<=', value: '0' },
      { field: 'prntAllMassPrnt', operator: '=', value: 'true' }
    ]
  };

  config: QueryBuilderConfig = {
    fields: {
      agentTaskNum: { name: 'AgentTaskNum', type: 'number' },
      prntAllMassPrnt: { name: 'PrntAllMassPrnt', type: 'string' }
    }
  };
}
