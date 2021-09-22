import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  listproducto: any[]=[
    {titulo:"Iphone 7", fechaCreacion:"2020/05/06", codigo:"26372", precio:"$1.400.000"},
    {titulo:"Macbook Pro", fechaCreacion:"2021/03/12", codigo:"12345", precio:"$3.050.000"},
    {titulo:"Airpods", fechaCreacion:"2019/03/01", codigo:"67890", precio:"$939.990"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
