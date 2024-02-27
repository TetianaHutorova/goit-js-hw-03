const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: Math.random(),
    };
    this.transactions.push(transaction);
  },

  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return "Недостатньо коштів!";
    } else {
      this.createTransaction(amount, Transaction.WITHDRAW);
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Транзакція не знайдена!:(";
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return "Типу транзакцій не існує!";
  },
};


