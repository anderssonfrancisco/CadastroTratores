import { TratoresService } from './../services/tratores.service';
import { Trator } from './../Modelos/trator';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tratores',
  templateUrl: './tratores.component.html',
  styleUrls: ['./tratores.component.scss']
})
export class TratoresComponent implements OnInit {

  tratores: Observable<Trator[]>;
  displayedColumns = ['marca', 'modelo'];

  //tratoresService: TratoresService;

  constructor(private tratoresService: TratoresService)
   {
    //this.tratoresService = new TratoresService();
    this.tratores = this.tratoresService.list();
  }

  ngOnInit(): void {
  }

}
