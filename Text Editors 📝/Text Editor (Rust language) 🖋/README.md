# Text Editor (Rust) 🖋

This is a simple text editor written in Rust that allows the user to enter and manipulate text, save the text to a file, and load text from a file.

## How it works

The text is stored in a `String` variable named `text`. The main loop repeatedly prompts the user for input, reads the input from the standard input stream, and processes the input based on the user's command.

The commands are:

- `"q"` to quit the program
- `"w"` to write the current text to a file
- `"a"` to append text from a file to the current text
- `"d"` to delete all the text

Any other input is treated as text to be added to the current text.

The `get_file_name` function prompts the user for a file name and returns it as a `String`. The `fs` module is used to read and write files.

## How to use

1. Clone this repository
2. Open a terminal and navigate to the cloned directory
3. Run the command `cargo run`
4. The program will prompt you to enter a command (`>` symbol)
5. Enter your command and press enter
6. Follow the prompts to enter text, file names, or to quit the program

## Dependencies

This program uses the following dependencies:

- `std::fs`
- `std::io`

## Contributing

This is a simple project and contributions are not necessary. However, if you would like to contribute, please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
