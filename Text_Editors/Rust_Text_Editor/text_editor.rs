use std::fs;
use std::io::{stdin, stdout, Write};

fn main() {
    let mut text = String::new();

    loop {
        print!("> ");
        stdout().flush().expect("Failed to flush");

        let mut input = String::new();
        stdin().read_line(&mut input).expect("Failed to read input");

        let command = input.trim();

        match command {
            "q" => break,
            "w" => {
                let file_name = get_file_name();
                fs::write(file_name, text.clone()).expect("Failed to write file");
            },
            "a" => {
                let file_name = get_file_name();
                let contents = fs::read_to_string(file_name).expect("Failed to read file");
                text.push_str(&contents);
            },
            "d" => text.clear(),
            _ => text.push_str(command),
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
