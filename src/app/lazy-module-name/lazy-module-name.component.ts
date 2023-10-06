import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lazy-module-name',
  templateUrl: './lazy-module-name.component.html',
  styleUrls: ['./lazy-module-name.component.scss']
})
export class LazyModuleNameComponent {
  constructor(private _apiService:ApiService){}
}
