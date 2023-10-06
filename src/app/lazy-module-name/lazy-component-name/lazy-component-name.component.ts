import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-lazy-component-name',
  templateUrl: './lazy-component-name.component.html',
  styleUrls: ['./lazy-component-name.component.scss']
})
export class LazyComponentNameComponent {
constructor(private _apiService:ApiService){}
}
