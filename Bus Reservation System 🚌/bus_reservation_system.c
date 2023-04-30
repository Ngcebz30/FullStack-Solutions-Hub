#include <stdio.h>

#define ROWS 3
#define COLS 4

int seats[ROWS][COLS] = {0};  // initialize all seats to unreserved (0)

void display_seats() {
    printf("  1 2 3 4\n");
    for (int i = 0; i < ROWS; i++) {
        printf("%d ", i + 1);
        for (int j = 0; j < COLS; j++) {
            printf("%c ", seats[i][j] ? 'X' : '_');  // print 'X' for reserved seats, '_' for unreserved
        }
        printf("\n");
    }
}

int reserve_seat(int row, int col) {
    if (row < 1 || row > ROWS || col < 1 || col > COLS) {  // check if seat is out of range
        return 0;
    }
    if (seats[row-1][col-1]) {  // check if seat is already reserved
        return 0;
    }
    seats[row-1][col-1] = 1;  // reserve the seat
    return 1;
}

int main() {
    int row, col;
    char choice;
    do {
        display_seats();
        printf("Enter row and column of seat you want to reserve: ");
        scanf("%d %d", &row, &col);
        if (reserve_seat(row, col)) {
            printf("Seat reserved successfully!\n");
        } else {
            printf("Invalid seat number or seat already reserved.\n");
        }
        printf("Do you want to reserve another seat? (y/n): ");
        scanf(" %c", &choice);  // read a single character, ignoring leading whitespace
    } while (choice == 'y' || choice == 'Y');
    return 0;
}
