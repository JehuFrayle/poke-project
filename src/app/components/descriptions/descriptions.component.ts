import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {
  
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
      this.http.get('https://pokeapi.co/api/v2/pokemon-species/132/').subscribe(results => {
        const descriptions: any[] = (results as any).flavor_text_entries;
        this.descriptions = descriptions.filter(description => description.language.name === 'en');
        console.log(this.descriptions);
      }, error => {
        console.log('Error', error);
      });
    }
    descriptions: any[] = [];
}
