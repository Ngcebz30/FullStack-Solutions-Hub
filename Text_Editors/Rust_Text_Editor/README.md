## Text Editor (Rust)

A simple text editor that allows the user to enter and manipulate text, save the text to a file, and load text from a file.

The text is stored in a String variable named text. The main loop repeatedly prompts the user for input, reads the input from the standard input stream, and processes the input based on the user's command.

The commands are:

-  "q" to quit the program
-  "w" to write the current text to a file
-  "a" to append text from a file to the current text
-  "d" to delete all the text
Any other input is treated as text to be added to the current text.
The get_file_name function prompts the user for a file name and returns it as a String. The fs module is used to read and write files.
