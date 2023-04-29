#include <stdio.h>
#include <stdlib.h>

/**
 * struct account - structure to represent a bank account
 *
 * @account_no: account number
 * @holder_name: holder's name
 * @balance: account balance
 */
struct account
{
	int account_no;
	char holder_name[30];
	float balance;
};

/**
 * create_account - function to create a new account
 *
 * @acc: pointer to the account struct
 */
void create_account(struct account *acc)
{
	printf("Enter account number: ");
	scanf("%d", &acc->account_no);
	printf("Enter holder name: ");
	scanf("%s", acc->holder_name);
	printf("Enter initial balance: ");
	scanf("%f", &acc->balance);
	printf("Account created successfully.\n");
}

/**
 * display_account - function to display account details
 *
 * @acc: account struct
 */
void display_account(struct account acc)
{
	printf("Account number: %d\n", acc.account_no);
	printf("Holder name: %s\n", acc.holder_name);
	printf("Current balance: $%.2f\n", acc.balance);
}

/**
 * deposit - function to deposit money into an account
 *
 * @acc: pointer to the account struct
 * @amount: amount to be deposited
 */
void deposit(struct account *acc, float amount)
{
	acc->balance += amount;
	printf("Deposit successful. New balance: $%.2f\n", acc->balance);
}

/**
 * withdraw - function to withdraw money from an account
 *
 * @acc: pointer to the account struct
 * @amount: amount to be withdrawn
 */
void withdraw(struct account *acc, float amount)
{
	if (amount > acc->balance)
	{
		printf("Insufficient balance.\n");
	}
	else
	{
		acc->balance -= amount;
		printf("Withdrawal successful. New balance: $%.2f\n", acc->balance);
	}
}

/**
 * main - main function to prompt user for bank management options
 *
 * Return: 0 on successful exit
 */
int main(void)
{
	int choice;
	float deposit_amount, withdraw_amount;
	struct account acc;

	/* display menu and prompt user for choice */
	while (1)
	{
		printf("\n--- Bank Management System ---\n");
		printf("1. Create account\n");
		printf("2. Display account details\n");
		printf("3. Deposit money\n");
		printf("4. Withdraw money\n");
		printf("5. Exit\n");
		printf("Enter your choice: ");
		scanf("%d", &choice);

		switch (choice)
		{
			case 1:
				create_account(&acc);
				break;
			case 2:
				display_account(acc);
				break;
			case 3:
				printf("Enter amount to deposit: ");
				scanf("%f", &deposit_amount);
				deposit(&acc, deposit_amount);
				break;
			case 4:
				printf("Enter amount to withdraw: ");
				scanf("%f", &withdraw_amount);
				withdraw(&acc, withdraw_amount);
				break;
			case 5:
				exit(0);
			default:
				printf("Invalid choice. Please try again.\n");
		}
	}

	return (0);
}
