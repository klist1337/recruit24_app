import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [PrismaModule, PositionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
