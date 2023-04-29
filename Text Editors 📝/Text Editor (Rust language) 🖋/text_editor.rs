use std::fs;
use std::io::{stdin, stdout, Write};

// This program allows the user to input text and perform basic file I/O operations on it.
// The user can enter text into a buffer, which can be saved to a file or loaded from a file.
// The user can also clear the buffer or quit the program.
fn main() {
    let mut text = String::new();

    loop {
        print!("> ");
        stdout().flush().expect("Failed to flush");

        let mut input = String::new();
        stdin().read_line(&mut input).expect("Failed to read input");

        let command = input.trim();

        match command {
            "q" => break, // Quit the program if user enters "q".
            "w" => {
                let file_name = get_file_name();
                fs::write(file_name, text.clone()).expect("Failed to write file"); // Write buffer to file.
            }
            "a" => {
                let file_name = get_file_name();
                if let Ok(contents) = fs::read_to_string(file_name) {
                    text.push_str(&contents); // Append file contents to buffer.
                } else {
                    println!("Failed to read file");
                }
            }
            "d" => {
                text.clear(); // Clear the buffer if user enters "d".
            }
            _ => {
                text.push_str(command); // Append user input to buffer.
            }
        }

        println!("{}", text);
    }
}

fn get_file_name() -> String {
    print!("File name: ");
    stdout().flush().expect("Failed to flush");

    let mut file_name = String::new();
    stdin().read_line(&mut file_name).expect("Failed to read input");

    file_name.trim().to_string()
}
