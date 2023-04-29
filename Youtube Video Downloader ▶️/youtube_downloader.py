from pytube import YouTube

# Ask user for the video URL
url = input("Enter the URL of the YouTube video you want to download: ")

# Create a YouTube object
video = YouTube(url)

# Print video title
print("Video Title:", video.title)

# Print available video streams
print("Available Video Streams:")
for stream in video.streams:
    print(stream)

# Ask user for the desired video resolution and format
resolution = input("Enter the resolution (e.g. 720p) of the video you want to download: ")
format = input("Enter the format (e.g. mp4) of the video you want to download: ")

# Filter streams based on resolution and format
streams = video.streams.filter(res=f'{resolution}', mime_type=f'video/{format}')

# Get the first stream (which is usually the one with both audio and video)
stream = streams.first()

# Download the video
print("Downloading...")
stream.download()
print("Download complete!")
