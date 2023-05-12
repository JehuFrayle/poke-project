import { Component, Input, OnInit } from '@angular/core';
import { ColorByType, IconByType, Type2 } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-type-icon',
  templateUrl: './type-icon.component.html',
  styleUrls: ['./type-icon.component.scss']
})
export class TypeIconComponent implements OnInit {
  @Input() type!: Type2;
  @Input() background: boolean = false;
  
  typeColor = ColorByType.fire;
  typeIcon = IconByType.bug;

  ngOnInit(): void {
    //Get index by the type name
    const indexColor = Object.keys(ColorByType).indexOf(this.type.name);
    //Get the color by the index
    this.background ? this.typeColor = Object.values(ColorByType)[indexColor] : this.typeColor = 'transparent';
    const indexIcon = Object.keys(IconByType).indexOf(this.type.name);
    this.typeIcon = Object.values(IconByType)[indexIcon];
  }
}
