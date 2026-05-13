import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';
import { Administrator } from './entities/Administrator';
import { Article } from './entities/Article';
import { ArticleFeature } from './entities/ArticleFeature';
import { ArticlePrice } from './entities/ArticlePrice';
import { Cart } from './entities/Cart';
import { CartArticle } from './entities/CartArticle';
import { Category } from './entities/Category';
import { Feature } from './entities/Feature';
import { OrderLog } from './entities/OrderLog';
import { Photo } from './entities/Photo';
import { User } from './entities/User';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseConfig.host,
      port: databaseConfig.port,
      database: databaseConfig.database,
      username: databaseConfig.username,
      password: databaseConfig.password,
      entities: [
        Administrator,
        Article,
        ArticleFeature,
        ArticlePrice,
        Cart,
        CartArticle,
        Category,
        Feature,
        OrderLog,
        Photo,
        User,
      ],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      Administrator,
      Article,
      ArticleFeature,
      ArticlePrice,
      Cart,
      CartArticle,
      Category,
      Feature,
      OrderLog,
      Photo,
      User,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
