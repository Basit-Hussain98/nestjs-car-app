import { Controller } from '@nestjs/common';
import { ReportService } from './reports.service';

@Controller()
export class ReportController {
  constructor(private reportService: ReportService) {}
}
