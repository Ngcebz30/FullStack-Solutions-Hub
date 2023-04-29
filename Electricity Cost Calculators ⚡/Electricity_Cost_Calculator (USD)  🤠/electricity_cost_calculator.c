#include <stdio.h>

/*
* main - C program that calculates the cost of electricity in US Dollars (USD)
*
* Return: 0
*/

int main() 
{
    float rate, usage, cost;
    
    printf("Enter the electricity rate in dollars per kilowatt-hour: ");
    scanf("%f", &rate);
    
    printf("Enter the electricity usage in kilowatt-hours: ");
    scanf("%f", &usage);
    
    cost = rate * usage;
    printf("The electricity cost is: $%.2f\n", cost);
    
    return 0;
}
