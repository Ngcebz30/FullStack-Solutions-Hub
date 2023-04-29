# Website Blocker 🚫

This is a Python script that blocks access to specified websites during certain hours of the day by redirecting their URLs to `127.0.0.1` in the computer's `hosts` file. 

## Requirements

* Python 3.x
* Administrator privileges (for editing the `hosts` file)

## Usage

1. Open the `prog.py` file in a text editor.
2. Edit the `hosts_path` variable to specify the path to the `hosts` file on your system. By default, it is set to `/etc/hosts`, which is the path on Linux systems. On Windows systems, it is typically located at `C:\Windows\System32\drivers\etc\hosts`.
3. Edit the `website_list` variable to specify the list of websites to be blocked.
4. Edit the `start_hour` and `end_hour` variables to specify the hours during which the websites should be blocked. These values are in 24-hour format.
5. Save the changes to the `prog.py` file.
6. Open a terminal or command prompt window and navigate to the directory containing the `prog.py` file.
7. Run the script using the command `python prog.py`.
8. The script will run continuously in the background, blocking the specified websites during the specified hours.

## Notes

* The `hosts` file is a system file that is used to map domain names to IP addresses. By redirecting the URLs of blocked websites to `127.0.0.1`, the script effectively prevents the computer from accessing those websites.
* The script requires administrator privileges to edit the `hosts` file. On Linux systems, you can run the script using `sudo` to gain administrator privileges. On Windows systems, you should right-click the command prompt or terminal window and choose "Run as administrator" before running the script.
* The script uses an infinite loop and sleeps for 60 seconds between each iteration. This ensures that the script runs continuously in the background, blocking the specified websites during the specified hours. If you want to stop the script, you can use `Ctrl+C` to interrupt it.
