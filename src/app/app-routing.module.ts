import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './components/dashboard/product-item/product-item.component';
import { ProductComponent } from './components/product/product.component';
import { UserRole } from './enums/user-role.enum';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: [UserRole.Admin],
    },
  },
  {
    path: 'dashboard/products/:productId',
    component: ProductItemComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [UserRole.Admin],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
