import { ChitietComponent } from './chitiet/chitiet.component';
import { DangkyHoctapBoiduongComponent } from './dangky-hoctap-boiduong/dangky-hoctap-boiduong.component';
import { DanhsachHoctapBoiduongComponent } from './danhsach-hoctap-boiduong/danhsach-hoctap-boiduong.component';
import { KehoachHoctapBoiduongComponent } from './kehoach-hoctap-boiduong/kehoach-hoctap-boiduong.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'kehoach-hoctap-boiduong',component: KehoachHoctapBoiduongComponent},
  {path:'danhsach-hoctap-boiduong',component: DanhsachHoctapBoiduongComponent},
  {path:'dangky-hoctap-boiduong',component: DangkyHoctapBoiduongComponent},
  {path:'chitiet-kehoach',component: ChitietComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoctapBoiduongRoutingModule { }
