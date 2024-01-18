import React, { useState } from "react";

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [initialFee, setInitialFee] = useState('');
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalAmountPaid, setTotalAmountPaid] = useState(null);
  const [extraPaid, setExtraPaid] = useState(null);
  const [loanOverpay, setLoanOverpay] = useState(null);
  const [creditAmount, setCreditAmount] = useState(null);

  const calculateMonthlyPayment = () => {
    const p = parseFloat(principal) - parseFloat(initialFee);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (p && r && n) {
      const monthlyPayment = (p * r) / (1 - Math.pow(1 + r, -n));

      setMonthlyPayment(monthlyPayment.toFixed(2));

      const totalAmountPaid = monthlyPayment * n;
      const extraPaid = totalAmountPaid - p;
      const loanOverpay = extraPaid - parseFloat(initialFee);
      const creditAmount = p - parseFloat(initialFee);

      setTotalAmountPaid(totalAmountPaid.toFixed(2));
      setExtraPaid(extraPaid.toFixed(2));
      setLoanOverpay(loanOverpay.toFixed(2));
      setCreditAmount(creditAmount.toFixed(2));
    }
  };

  return (
    <div className="container mt-4 ">
      <h1 className="text-xl font-bold mb-4">Mortgage Calculator</h1>
      <div className=" flex gap-5  rounded-md shadow-md mx-auto  p-4 ">
        {" "}
        <div className=" max-w-md flex-1">
          {" "}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="principal"
            >
              Loan Amount ($)
            </label>
            <input
              type="number"
              id="principal"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="initialFee"
            >
            Down Payment ($)
            </label>
            <input
              type="number"
              id="initialFee"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={initialFee}
              onChange={(e) => setInitialFee(e.target.value)}
            />
          </div>
          <div className=" flex gap-2">
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="interestRate"
              >
            Interest Rate (%)
              </label>
              <input
                type="number"
                id="interestRate"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="loanTerm"
              >
                Loan Term (Years)
              </label>
              <input
                type="number"
                id="loanTerm"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={calculateMonthlyPayment}
          >
            Calculate
          </button>
        </div>
        {monthlyPayment && (
          <div className="mt-4 flex-1">
            <p className="text-lg font-semibold">
              Monthly Payment: ${monthlyPayment}
            </p>
            <p>Total Amount Paid: ${totalAmountPaid}</p>
            <p>Extra Paid: ${extraPaid}</p>
            <p>Loan Overpay: ${loanOverpay}</p>
            <p>Credit Amount: ${creditAmount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
