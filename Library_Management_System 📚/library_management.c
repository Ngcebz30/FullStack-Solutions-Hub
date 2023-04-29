#include <stdio.h>
#include <string.h>

/*
* main - C program for simple Library Management System
*
* Return:0
*/

struct book 
{
    char title[50];
    char author[50];
    int id;
};

/* Function declarations */
void add_book(struct book[], int*);
void search_book(struct book[], int);
void display(struct book[], int);

int main() 
{
    struct book library[100];
    int num_books = 0;
    int choice;

    while (1) 
    {
        /* Print the main menu */ 
        printf("\nLibrary Management System\n");
        printf("1. Add Book\n");
        printf("2. Search Book\n");
        printf("3. Display All Books\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) 
        {
            case 1:
                add_book(library, &num_books);
                break;
            case 2:
                search_book(library, num_books);
                break;
            case 3:
                display(library, num_books);
                break;
            case 4:
                printf("\nExiting...\n");
                return 0;
            default:
                printf("\nInvalid choice. Please try again.\n");
        }
    }
}

/* Function to add a new book to the library */
void add_book(struct book library[], int* num_books) 
{
    struct book new_book;

    /* Get book details from user input */
    printf("\nEnter book title: ");
    scanf("%s", new_book.title);

    printf("Enter author name: ");
    scanf("%s", new_book.author);

    printf("Enter book ID: ");
    scanf("%d", &new_book.id);

    /* Add the new book to the library */
    library[*num_books] = new_book;
    (*num_books)++;

    printf("\nBook added successfully!\n");
}

/* Function to search for a book in the library */
void search_book(struct book library[], int num_books) 
{
    int id, i, flag = 0;

    /* Get book ID to search for from user input */
    printf("\nEnter book ID to search for: ");
    scanf("%d", &id);

    /* Search for the book in the library */
    for (i = 0; i < num_books; i++) 
    {
        if (library[i].id == id) 
        {
            printf("\nBook found!\n");
            printf("Title: %s\n", library[i].title);
            printf("Author: %s\n", library[i].author);
            printf("ID: %d\n", library[i].id);
            flag = 1;
            break;
        }
    }
    if (flag == 0) 
    {
        printf("\nBook not found.\n");
    }
}

/* Function to display all books in the library */
void display(struct book library[], int num_books) 
{
    int i;

    if (num_books == 0) 
    {
        printf("\nNo books in the library.\n");
    } 
    else 
    {
        printf("\nList of books in the library:\n");
        for (i = 0; i < num_books; i++) {
            printf("Title: %s\n", library[i].title);
            printf("Author: %s\n", library[i].author);
            printf("ID: %d\n", library[i].id);
            printf("\n");
        }
    }
}
