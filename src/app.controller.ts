import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllIncomeReports(): string {
    return 'getAll';
  }

  @Get(':id')
  getIncomeReportById(): string {
    return 'getById';
  }

  @Post()
  createIncomeReport(): string {
    return 'create';
  }

  @Put(':id')
  updateIncomeReportById(): string {
    return 'updateById';
  }

  @Delete(':id')
  deleteIncomeReportById(): string {
    return 'deleteById';
  }
}
