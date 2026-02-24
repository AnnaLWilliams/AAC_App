# Design document

The goal of this project is to create an Augmentative and Alternative Communication (AAC) App with options to help speed up communication.

## Requirements:
- Usable on android devices
- Menu for creating and using text chains
    - Each word or phrase added to the AAC App will have a list of "chained" words that will appear as an option when that word or phrase is selected
- Options for adding and categorizing words and phrases
- Text to speech (TTS)
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
            - Q: Should there be two menus one if you want to add chains to this word and another if you want to chain the new word to existing ones?
        - Category menu 
            - Make sure this is easily navigable and customizable
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
        - How to locally hold the words in a quickly searchable format after they've been extracted from storage on startup

## TTS Research
- Requirements
    - For more consistent use it would be best to ensure the tts can be run entirely offline.  This precludes most AI based voices that do their processing on a server
    - Needs to be light weight enough to run on an android device
    - Needs to be able to process requests quickly.  Typing a message is already going to take long enough we don't want to slow down communication any more than it already has been
- Options
    - [android.speech.tts](https://github.com/OHF-Voice/piper1-gpl?tab=readme-ov-file)
        - pros
            - Already installed on android devices
        - cons
            - According to the documentation it looks to only be available in java
    - [Piper](https://github.com/OHF-Voice/piper1-gpl?tab=readme-ov-file)
        - pros
            - Open source
            - Specifically designed to be light weight
            - Plenty of voice options
            - Has C/C++ and Python API options
        - Cons
            - Some voices can be very flat or have background artifacts
    - [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) 
        - Pros
            - Available in many languages C/C++, python, JavaScript, Java, C#, Go, Rust
            - Specialized pre built APKs for android devices
            - plenty of voice options
        - Cons
            - Lots of voices means lots of low quality flat voices.  They will need to be sorted through when deciding what to include by default
    - [Kokoro](https://kokorottsai.com/)
        - Pros
            - Good sounding voice
            - Looks like there are many version and languages
            - One option of the onnx runtime
                - looks like its for python?
        - Cons
            - A very popular TTS so there are a lot of different version and will need more research to pick the right one
