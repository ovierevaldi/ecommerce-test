import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot( {isGlobal: true}),
    ProductModule, 
    CategoryModule, 
    UserModule, 
    AdminModule, 
    AuthModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
