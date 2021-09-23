import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      fechaCreacion: ['', Validators.required, Validators.maxLength(10), Validators.minLength(10)],
      codigo: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    console.log(this.form);

    const producto:any = {
      titulo: this.form.get('titulo')?.value,
      fechaCreacion: this.form.get('fechaCreacion')?.value,
      codigo: this.form.get('codigo')?.value,
      precio: this.form.get('precio')?.value,
    }
    this.listproducto.push(producto)
    this.toastr.success('El producto fue registrado con exito!', 'Producto registrado!');
    this.form.reset();
  }

  eliminarTarjeta(index: number){
    this.listproducto.splice(index, 1);
    this.toastr.error('El producto fue eliminado con exito!','Producto eliminado!')
  }

}
