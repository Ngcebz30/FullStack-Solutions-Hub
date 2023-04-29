#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_TEXT_SIZE 1000

/**
 * main - Simple text editor program
 *
 * This program allows the user to input text and save it to a file or load text from a file and append it to the current text.
 *
 * Return: Always 0.
 */
int main(void)
{
    char text[MAX_TEXT_SIZE];
    char command[10];
    char filename[100];
    FILE *fp;

    printf("Simple Text Editor\n\n");

    while (1) 
    {
        /* Prompt the user for input */
        printf("$ ");

        /* Read the input and remove the newline character */
        fgets(command, sizeof(command), stdin);
        command[strcspn(command, "\n")] = '\0';

        /* Process the command */
        if (strcmp(command, "q") == 0) 
        { /* Quit the program if the user enters "q" */
            break;
        } 
        else if (strcmp(command, "w") == 0) { /* Write the text to a file if the user enters "w" */
            printf("Enter filename: ");
            fgets(filename, sizeof(filename), stdin);
            filename[strcspn(filename, "\n")] = '\0';

            fp = fopen(filename, "w");

            if (fp == NULL) 
            { /* Check if the file could be opened for writing */
                printf("Error: Unable to open file.\n");
            } 
            else 
            {
                fputs(text, fp); /* Write the text to the file */
                fclose(fp); /* Close the file */
                printf("Saved to %s.\n", filename);
            }
        } 
        else if (strcmp(command, "a") == 0) { /* Append text from a file to the current text if the user enters "a" */
            printf("Enter filename: ");
            fgets(filename, sizeof(filename), stdin);
            filename[strcspn(filename, "\n")] = '\0';

            fp = fopen(filename, "r");

            if (fp == NULL) 
            { /* Check if the file could be opened for reading */
                printf("Error: Unable to open file.\n");
            } else 
            {
                char filetext[MAX_TEXT_SIZE];
                fgets(filetext, sizeof(filetext), fp); /* Read the text from the file */
                fclose(fp); /* Close the file */

                strcat(text, filetext); /* Append the text to the current text */
                printf("Appended from %s.\n", filename);
            }
        } 
        else if (strcmp(command, "d") == 0) { /* Clear the text if the user enters "d" */
            memset(text, 0, sizeof(text));
            printf("Text deleted.\n");
        } 
        else 
        { /* Add the input to the current text if the user enters anything else */
            strcat(text, command);
            strcat(text, "\n");
        }

        /* Display the current text */
        printf("%s", text);
    }

    return (0);
}
