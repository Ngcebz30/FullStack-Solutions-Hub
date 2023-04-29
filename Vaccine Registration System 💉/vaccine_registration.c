#include <stdio.h>
#include <string.h>

/**
 * struct Vaccine - contains data for vaccine registration
 *
 * @name: name of person registering for vaccine
 * @age: age of person registering for vaccine
 * @email: email of person registering for vaccine
 */
struct Vaccine
{
    char name[50];
    int age;
    char email[50];
};

/**
 * main - entry point of the program
 *
 * Return: 0 on successful completion of the program
 */
int main(void)
{
    struct Vaccine v;

    printf("Welcome to the Vaccine Registration Portal\n");
    printf("------------------------------------------\n\n");

    printf("Please enter your name: ");
    scanf("%s", v.name);

    printf("Please enter your age: ");
    scanf("%d", &v.age);

    printf("Please enter your email: ");
    scanf("%s", v.email);

    printf("\n\nThank you for registering!\n");
    printf("Name: %s\n", v.name);
    printf("Age: %d\n", v.age);
    printf("Email: %s\n", v.email);

    return (0);
}
