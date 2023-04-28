#include <stdio.h>
#include <stdlib.h>

// structure to represent a bank account
struct account {
    int account_no;
    char holder_name[30];
    float balance;
};

// function to create a new account
void create_account(struct account *acc) {
    printf("Enter account number: ");
    scanf("%d", &acc->account_no);
    printf("Enter holder name: ");
    scanf("%s", acc->holder_name);
    printf("Enter initial balance: ");
    scanf("%f", &acc->balance);
    printf("Account created successfully.\n");
}

// function to display account details
void display_account(struct account acc) {
    printf("Account number: %d\n", acc.account_no);
    printf("Holder name: %s\n", acc.holder_name);
    printf("Current balance: $%.2f\n", acc.balance);
}

// function to deposit money into an account
void deposit(struct account *acc, float amount) {
    acc->balance += amount;
    printf("Deposit successful. New balance: $%.2f\n", acc->balance);
}

// function to withdraw money from an account
void withdraw(struct account *acc, float amount) {
    if (amount > acc->balance) {
        printf("Insufficient balance.\n");
    } else {
        acc->balance -= amount;
        printf("Withdrawal successful. New balance: $%.2f\n", acc->balance);
    }
}

int main() {
    int choice;
    struct account acc;

    // display menu and prompt user for choice
    while (1) {
        printf("\n--- Bank Management System ---\n");
        printf("1. Create account\n");
        printf("2. Display account details\n");
        printf("3. Deposit money\n");
        printf("4. Withdraw money\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                create_account(&acc);
                break;
            case 2:
                display_account(acc);
                break;
            case 3:
                printf("Enter amount to deposit: ");
                float deposit_amount;
                scanf("%f", &deposit_amount);
                deposit(&acc, deposit_amount);
                break;
            case 4:
                printf("Enter amount to withdraw: ");
                float withdraw_amount;
                scanf("%f", &withdraw_amount);
                withdraw(&acc, withdraw_amount);
                break;
            case 5:
                exit(0);
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}
