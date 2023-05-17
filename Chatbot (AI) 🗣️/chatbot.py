import random

greetings = ["hello", "hi", "hey", "what's up", "howdy", "yo"]
greeting_responses = ["Hello!", "Hi there!", "Hey!", "Hi! How can I assist you?", "Howdy!"]

weather_questions = ["what's the weather like", "how's the weather today", "will it rain today", "temperature today"]
weather_responses = ["It's sunny and warm!", "The temperature is 75 degrees Fahrenheit.", "It looks like it might rain later today.", "It's a beautiful day outside!"]

movie_questions = ["what movies are playing now", "what's a good movie to watch", "can you recommend a movie"]
movie_responses = ["Some popular movies playing now are Avengers: Endgame and Aladdin.", "I recommend watching The Godfather. It's a classic!", "If you like action movies, I recommend watching John Wick."]

music_questions = ["what's a good song to listen to", "can you recommend some music", "who's your favorite musician"]
music_responses = ["I recommend listening to 'Blinding Lights' by The Weeknd. It's a great song!", "If you like rock music, you should check out Guns N' Roses.", "My favorite musician is Beyonce."]

food_questions = ["what's a good restaurant nearby", "recommend a dish to try", "what's your favorite cuisine"]
food_responses = ["There's a great Italian restaurant called 'Pasta Paradise' nearby.", "You should try the sushi at 'Sushi Sensation'. It's amazing!", "I enjoy Mexican cuisine. The flavors are fantastic!"]

time_questions = ["what's the current time", "do you have the time", "what time is it"]
time_responses = ["The current time is 2:30 PM.", "It's 10:45 AM right now.", "The time is 6:15 PM."]

goodbye = ["bye", "goodbye", "see you later", "adios"]
goodbye_responses = ["Goodbye!", "See you later!", "Take care!"]

while True:
    user_input = input("You: ").lower()

    if user_input in greetings:
        bot_response = random.choice(greeting_responses)
        print("Bot: " + bot_response)

    elif user_input in weather_questions:
        bot_response = random.choice(weather_responses)
        print("Bot: " + bot_response)

    elif user_input in movie_questions:
        bot_response = random.choice(movie_responses)
        print("Bot: " + bot_response)

    elif user_input in music_questions:
        bot_response = random.choice(music_responses)
        print("Bot: " + bot_response)

    elif user_input in food_questions:
        bot_response = random.choice(food_responses)
        print("Bot: " + bot_response)

    elif user_input in time_questions:
        bot_response = random.choice(time_responses)
        print("Bot: " + bot_response)

    elif user_input in goodbye:
        bot_response = random.choice(goodbye_responses)
        print("Bot: " + bot_response)
        break

    else:
        print("Bot: Sorry, I didn't understand what you said. Can you please rephrase your question?")
