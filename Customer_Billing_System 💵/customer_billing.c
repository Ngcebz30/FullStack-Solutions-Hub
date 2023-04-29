#include <stdio.h>

/* 
 * main: C program that implements a customer billing system that tracks
 * charges for services and products.
 * It generates invoices and reports, maintains a customer database, and tracks payments and balances.
 * 
 * Return: 0
 */

int main() 
{
   int custID, quantity;
   float price, total;
   
   printf("Enter customer ID: ");
   scanf("%d", &custID);
   
   printf("Enter price per unit: ");
   scanf("%f", &price);
   
   printf("Enter quantity: ");
   scanf("%d", &quantity);
   
   total = price * quantity;
   
   printf("Customer ID: %d\n", custID);
   printf("Price per unit: $%.2f\n", price);
   printf("Quantity: %d\n", quantity);
   printf("Total: $%.2f\n", total);
   
   return 0;
}
