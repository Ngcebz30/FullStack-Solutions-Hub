#include <stdio.h>

/* main - C program for a movie ticket booking system using a 2D array to represent seats. Users can select and book seats, 
 * and the program displays the updated seating arrangement. 
 * A booking summary shows total booked, and available seats.
 * 
 * Return: 0
 */

int main() 
{
    int rows, cols, choice;
    int seat_no_row, seat_no_col;
    int seats[10][10] = {0}; // 2D array for seats, 0 for unbooked, 1 for booked
    int total_seats = 0, booked_seats = 0, available_seats = 0;

    printf("Welcome to the Movie Ticket Booking System!\n");
    printf("Enter the number of rows (max 10): ");
    scanf("%d", &rows);

    printf("Enter the number of columns (max 10): ");
    scanf("%d", &cols);

    total_seats = rows * cols;
    printf("\nTotal number of seats: %d\n", total_seats);

    /* Display seats */
    printf("\n");
    printf("   ");
    for (int j = 0; j < cols; j++) 
    {
        printf("%d ", j+1);
    }
    printf("\n");
    for (int i = 0; i < rows; i++) 
    {
        printf("%d  ", i+1);
        for (int j = 0; j < cols; j++) 
        {
            printf("%d ", seats[i][j]);
        }
        printf("\n");
    }

    /* Book seats */
    do 
    {
        printf("\nEnter the row number and column number of the seat you want to book (e.g. 1 2): ");
        scanf("%d %d", &seat_no_row, &seat_no_col);

        if (seats[seat_no_row-1][seat_no_col-1] == 1) 
        {
            printf("\nSorry, this seat is already booked. Please select another seat.\n");
        } else {
            seats[seat_no_row-1][seat_no_col-1] = 1;
            booked_seats++;
            available_seats = total_seats - booked_seats;

            printf("\nSeat booked successfully!\n");

            /* Display updated seats */
            printf("\n");
            printf("   ");
            for (int j = 0; j < cols; j++) 
            {
                printf("%d ", j+1);
            }
            printf("\n");
            for (int i = 0; i < rows; i++) 
            {
                printf("%d  ", i+1);
                for (int j = 0; j < cols; j++) 
                {
                    printf("%d ", seats[i][j]);
                }
                printf("\n");
            }
        }

        printf("\nDo you want to book another seat? (1 for yes, 0 for no): ");
        scanf("%d", &choice);
    } while (choice != 0);

    /* Display booking summary */
    printf("\nBooking summary:\n");
    printf("Total seats: %d\n", total_seats);
    printf("Booked seats: %d\n", booked_seats);
    printf("Available seats: %d\n", available_seats);

    return 0;
}

