from bank_account import BankAccount
account = BankAccount("001798", 10000000)
print(account)

account.deposit(100)
account.withdraw(1000000)
print(account.account_number)
print(account.get_balance())