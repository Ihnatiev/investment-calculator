import { Component, inject, Signal } from '@angular/core';
import { InvestmentService } from "../services/investment.service";
import { InvestmentResult } from "../interfaces";

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService: InvestmentService = inject(InvestmentService)

  results: Signal<InvestmentResult[] | undefined> = this.investmentService.resultData.asReadonly();
}
