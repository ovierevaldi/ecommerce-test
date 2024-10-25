import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductModule, CategoryModule, UserModule, AdminModule, AuthModule, ConfigModule.forRoot( {isGlobal: true})],
  controllers: [AppController],
  providers: [AppService, PrismaService, CategoryService],
})
export class AppModule {}
