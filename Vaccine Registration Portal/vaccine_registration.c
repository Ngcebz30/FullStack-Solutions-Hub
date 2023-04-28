#include <stdio.h>
#include <string.h>

struct Vaccine {
    char name[50];
    int age;
    char email[50];
};

int main() {
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

    return 0;
}
