import os
import time
from datetime import datetime as dt

hosts_path = "/home/brgldA/hosts"
redirect = "127.0.0.1"
website_list = ["www.facebook.com", "facebook.com", "www.instagram.com", "instagram.com"]  # List of websites to be blocked
start_hour = 9  # Hour when blocking should start (24-hour format)
end_hour = 17  # Hour when blocking should end (24-hour format)

if not os.path.exists(hosts_path):
    with open(hosts_path, "w") as file:
        pass

while True:
    if dt(dt.now().year, dt.now().month, dt.now().day, start_hour) < dt.now() < dt(dt.now().year, dt.now().month, dt.now().day, end_hour):
        with open(hosts_path, "r+") as file:
            content = file.read()
            for website in website_list:
                if website in content:
                    pass
                else:
                    file.write(redirect + " " + website + "\n")
    else:
        with open(hosts_path, "r+") as file:
            content = file.readlines()
            file.seek(0)
            for line in content:
                if not any(website in line for website in website_list):
                    file.write(line)
            file.truncate()
    time.sleep(60)
