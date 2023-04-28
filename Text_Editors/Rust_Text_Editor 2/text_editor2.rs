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
            "h" | "help" => {
                println!("Available commands:");
                println!("q\t\tQuit the program");
                println!("w\t\tWrite the current text to a file");
                println!("a\t\tAppend text from a file to the current text");
                println!("d\t\tDelete all the text");
                println!("h | help\tDisplay this help message");
                println!("s | search\tSearch for a string within the current text");
                println!("r | replace\tReplace all occurrences of a string within the current text with a new string");
                println!("c | count\tCount the number of occurrences of a string within the current text");
                println!("f | find\tFind the first occurrence of a string within the current text");
            },
            "s" | "search" => {
                let mut search_string = String::new();
                print!("Search for: ");
                stdout().flush().expect("Failed to flush");
                stdin().read_line(&mut search_string).expect("Failed to read input");
                let search_string = search_string.trim();
                let mut search_results = String::new();
                for (i, line) in text.lines().enumerate() {
                    if line.contains(search_string) {
                        search_results.push_str(&format!("Line {}: {}\n", i + 1, line));
                    }
                }
                println!("{}", search_results);
            },
            "r" | "replace" => {
                let mut replace_string = String::new();
                let mut new_string = String::new();
                print!("Replace: ");
                stdout().flush().expect("Failed to flush");
                stdin().read_line(&mut replace_string).expect("Failed to read input");
                print!("With: ");
                stdout().flush().expect("Failed to flush");
                stdin().read_line(&mut new_string).expect("Failed to read input");
                let replace_string = replace_string.trim();
                let new_string = new_string.trim();
                text = text.replace(replace_string, new_string);
            },
            "c" | "count" => {
                let mut count_string = String::new();
                print!("Count: ");
                stdout().flush().expect("Failed to flush");
                stdin().read_line(&mut count_string).expect("Failed to read input");
                let count_string = count_string.trim();
                let count = text.matches(count_string).count();
                println!("Count: {}", count);
            },
            "f" | "find" => {
                let mut find_string = String::new();
                print!("Find: ");
                stdout().flush().expect("Failed to flush");
                stdin().read_line(&mut find_string).expect("Failed to read input");
                let find_string = find_string.trim();
               
