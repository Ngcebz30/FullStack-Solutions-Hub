## Rust Text Editor (with more commands)

This code creates a simple text editor that allows the user to enter and manipulate text, save the text to a file, and load text from a file.

The text is stored in a String variable named text. The main loop repeatedly prompts the user for input, reads the input from the standard input stream, and processes the input based on the user's command.

The commands are:

-  "q" to quit the program
-  "w" to write the current text to a file
-  "a" to append text from a file to the current text
-  "d" to delete all the text
Any other input is treated as text to be added to the current text.
The get_file_name function prompts the user for a file name and returns it as a String. The fs module is used to read and write files.

## More commands 

-  "h" or "help" to display a help message with a list of available commands and their descriptions.
-  "s" or "search" to search for a string within the current text and display the search results.
-  "r" or "replace" to replace all occurrences of a string within the current text with a new string.
-  "c" or "count" to count the number of occurrences of a string within the current text and display the count.
-  "f" or "find" to find the first occurrence of a string within the current text and display its position.
