#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <ctype.h>

#define MAX_WORDS 20
#define MAX_LENGTH 10
#define MAX_TIME 60

int main() {
    char word[MAX_WORDS][MAX_LENGTH];
    char input[MAX_LENGTH];
    int i, count = 0, correct = 0;
    time_t start_time, end_time;
    double elapsed_time;

    // Open the word list file
    FILE *word_list = fopen("wordlist.txt", "r");
    if (!word_list) {
        printf("Could not open word list file!\n");
        return 1;
    }

    // Read in the word list
    for (i = 0; i < MAX_WORDS; i++) {
        if (fscanf(word_list, "%s", word[i]) != 1) {
            printf("Could not read word list!\n");
            return 1;
        }
    }

    // Close the word list file
    fclose(word_list);

    // Seed the random number generator
    srand(time(NULL));

    // Print out the instructions
    printf("Welcome to the Typing Tutor!\n\n");
    printf("You will be given a random word to type.\n");
    printf("Type the word and hit enter to submit.\n");
    printf("You have %d seconds to type as many words as you can.\n\n", MAX_TIME);

    // Wait for the user to start the game
    printf("Press enter to start the game.\n");
    getchar();

    // Start the game timer
    time(&start_time);

    // Loop until the time runs out
    while (1) {
        // Pick a random word
        int index = rand() % MAX_WORDS;
        printf("%s: ", word[index]);

        // Get user input
        fgets(input, MAX_LENGTH, stdin);

        // Strip newline character
        input[strlen(input)-1] = '\0';

        // Check for correct input
        if (strcmp(input, word[index]) == 0) {
            printf("Correct!\n");
            correct++;
        } else {
            printf("Incorrect! The correct word was \"%s\".\n", word[index]);
        }

        // Increment the word count
        count++;

        // Check for time limit
        time(&end_time);
        elapsed_time = difftime(end_time, start_time);
        if (elapsed_time >= MAX_TIME) {
            break;
        }
    }

    // Calculate and print the results
    double accuracy = (double)correct / count * 100;
    printf("\nTime's up!\n");
    printf("You typed %d words in %.2f seconds.\n", count, elapsed_time);
    printf("Your typing accuracy was %.2f%%.\n", accuracy);

    return 0;
}
