import { Component, inject, Signal } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { InvestmentService } from "../services/investment.service";
import { InvestmentResult } from "../interfaces";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService: InvestmentService = inject(InvestmentService)

  results: Signal<InvestmentResult[] | undefined> = this.investmentService.resultData.asReadonly();
}
