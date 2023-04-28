#include <stdio.h>

int main() {
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
