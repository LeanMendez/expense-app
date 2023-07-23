interface IData {
  report: IReport[];
}

export interface IReport {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType;
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: IData = {
  report: [
    {
      id: 'uuid1',
      source: 'sueldo',
      amount: 280000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'freelo1',
      amount: 60000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'freelo2',
      amount: 80000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid4',
      source: 'comida',
      amount: 25000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
