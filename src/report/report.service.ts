import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { IReport, ReportType, data } from '../data';
import { ReportResponseDto } from '../report/dto/report.dto';

interface ICreateBody {
  amount: number;
  source: string;
}

interface IUpdateBody {
  amount?: number;
  source?: string;
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType) {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string) {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) return;
    return new ReportResponseDto(report);
  }

  createReport(type: string, { amount, source }: ICreateBody): IReport {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReportById(type: ReportType, id: string, body: IUpdateBody) {
    const reportToBeUpdated: IReport = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToBeUpdated) return;
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToBeUpdated.id,
    );
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReportById(id) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
