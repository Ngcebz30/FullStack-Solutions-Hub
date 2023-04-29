# Text Editor (C) ✍🏽

This is a simple text editor written in C. It allows the user to enter text and save it to a file, append text from a file to the current text, clear the text, and display the current text.

## Getting Started

### Prerequisites

To compile and run this program, you will need:

- A C compiler (such as GCC)
- A Unix-like operating system (such as Linux or macOS)

### Installing

To install the program, simply download the source code and compile it with your C compiler:

```
$ gcc -o editor editor.c
```

### Usage

To run the program, simply execute the compiled binary:

```
$ ./editor
```

The program will display a prompt (`$`) and wait for input. Here are the available commands:

- `q` – Quit the program
- `w` – Write the text to a file
- `a` – Append text from a file to the current text
- `d` – Clear the text
- Anything else – Add the input to the current text

## Contributing

Contributions are welcome! If you find a bug or have an idea for an improvement, please open an issue or submit a pull request.

## License

This program is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
