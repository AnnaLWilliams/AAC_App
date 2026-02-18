# Design document

The goal of this project is to create an Augmentative and Alternative Communication (AAC) App with options to help speed up communication.

## Requirements:
- Usable on android devices
- Menu for creating and using text chains
    - Each word or phrase added to the AAC App will have a list of "chained" words that will appear as an option when that word or phrase is selected
- Options for adding and categorizing words and phrases
- Text to speach (TTS)
    - must be available while offline
    - add a setting to let the TTS ignore headphones and always use the phone speakers
 
 ## Tasks
 - Front end
    - UI
        - Text box for typing
        - Menu for adding new phrases
        - Text box controls 
            - Clear
            - Use TTS
            - Add to phrases
        - Menu for editing chains
            - Q: Should there be two menues one if you want to add chains to this word and another if you want to chain the new word to existing ones?
        - Category menu 
            - Make sure this is easily navigateable and customizable
        - Words in a category
            - Add a toggle that lets the user move around the word order
 - Back end
    - TTS
        - Look around at a few options to find one that works best at a reasonable price
        - Try to get one that has a few voice options
    - Word and chain storage
        - Find the best way to store a large amount of text on a mobile device
            - possibly JSON?
        - Methods to update the word list
        - How to locally hold the words in a quickly searchable format after theyve been extracted from storage on startup
        