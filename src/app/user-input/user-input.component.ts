import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { InvestmentService } from "../services/investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment: WritableSignal<string> = signal('0');
  enteredAnnualInvestment: WritableSignal<string> =  signal('0');
  enteredExpectedReturn: WritableSignal<string> =  signal('5');
  enteredDuration: WritableSignal<string> =  signal('10');

  constructor(private readonly investmentService: InvestmentService) {
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
