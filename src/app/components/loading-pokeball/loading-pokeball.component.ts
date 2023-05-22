import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading-pokeball',
  templateUrl: './loading-pokeball.component.html',
  styleUrls: ['./loading-pokeball.component.scss']
})
export class LoadingPokeballComponent {
  constructor(private loadingService:LoadingService) { }
  isLoading$ = this.loadingService.isLoading$;
  isFinalizing$ = this.loadingService.isFinalizing$;
}
