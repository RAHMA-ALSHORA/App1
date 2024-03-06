import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadService } from 'src/serves/load.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoadService) {
  }

}
