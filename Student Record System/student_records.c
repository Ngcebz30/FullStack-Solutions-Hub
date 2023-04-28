#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_STUDENTS 100

struct student {
    int id;
    char name[50];
    float gpa;
};

int num_students = 0;
struct student students[MAX_STUDENTS];

void add_student() {
    if (num_students == MAX_STUDENTS) {
        printf("Cannot add more students.\n");
        return;
    }

    struct student s;

    printf("Enter student ID: ");
    scanf("%d", &s.id);

    printf("Enter student name: ");
    scanf("%s", s.name);

    printf("Enter student GPA: ");
    scanf("%f", &s.gpa);

    students[num_students++] = s;

    printf("Student added successfully.\n");
}

void search_student() {
    int id;
    printf("Enter student ID: ");
    scanf("%d", &id);

    for (int i = 0; i < num_students; i++) {
        if (students[i].id == id) {
            printf("Student ID: %d\n", students[i].id);
            printf("Student name: %s\n", students[i].name);
            printf("Student GPA: %.2f\n", students[i].gpa);
            return;
        }
    }

    printf("Student not found.\n");
}

void list_students() {
    for (int i = 0; i < num_students; i++) {
        printf("Student ID: %d\n", students[i].id);
        printf("Student name: %s\n", students[i].name);
        printf("Student GPA: %.2f\n", students[i].gpa);
    }
}

int main() {
    int choice;

    while (1) {
        printf("\n");
        printf("Student Record System\n");
        printf("---------------------\n");
        printf("1. Add Student\n");
        printf("2. Search Student\n");
        printf("3. List Students\n");
        printf("4. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                add_student();
                break;
            case 2:
                search_student();
                break;
            case 3:
                list_students();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid choice.\n");
        }
    }

    return 0;
}
