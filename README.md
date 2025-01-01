# Who sang it?
Who sang it? is a quiz, where users can test whether they recognize lyrics, when the music is missing.
![Screenshot 2024-08-15 200921](https://github.com/user-attachments/assets/53937dd0-261f-4715-930e-5b187553ec8d)

You can play the quiz [here](https://nicole215.github.io/whosangit/)
## User Experience (UX)
### User Stories
- As a user, I want to know the topic of the quiz
- As a user, I want to know how to play
- As a user, I want to test my lyrics knowledge
- As a user, I want to know if the selected answer is correct
- As a user, I want to know my score
- As a user, I want to know how far I have progressed in the game
## Design
The design of the Song Quiz is intentionally kept simple to avoid distractions, as the quiz itself is already challenging. The background color of the page is lightcyan, chosen specifically to help the player maintain a cool and focused mindset while playing.
### Color Scheme
The page is mainly kept in two colors.

![Screenshot 2024-08-15 024021](https://github.com/user-attachments/assets/edfd5b2d-26dd-4a96-82ec-4d13f372b267)

### Font
For the quiz name, shown through all pages, Rock Salt was used. With the handwritten style it loosens up the website.

![Screenshot 2024-08-15 024343](https://github.com/user-attachments/assets/f316ea49-d052-4004-9898-03edc2ae57f9)
### Wireframes
All wireframes were created using Balsamiq.
<details>
<summary>Desktop</summary>
  
![New Wireframe 1](https://github.com/user-attachments/assets/6b6dc9ca-5ec5-4ed9-b860-55087499eb1d)
  
![New Wireframe 2](https://github.com/user-attachments/assets/63bec6d7-96fa-4437-b693-6b7e853b2d9b) 
</details>
<details>
<summary>Mobile Phone</summary>

![New Wireframe 3](https://github.com/user-attachments/assets/c26f4ba4-67ac-47a9-b341-adf285a2702b)
</details>

## Features
### Existing Features
- Rules Area
  - Upon first opening the site, the rules will be shown.
  - This section shows a short explanation.
  - This section also has a start button to start the game.
  
![Screenshot 2024-08-15 201857](https://github.com/user-attachments/assets/829081ca-c9d8-4e04-9eec-a71d056eea63)

- Quiz Area
  - This section shows a question and three possible answers.
  - When the right answer gets chosen, it turns green and the next button appears.
  - When the wrong answer is chosen, it turns red, revealing the correct answer in green, and the next button appears.
    
![Screenshot 2024-08-15 031343](https://github.com/user-attachments/assets/2a22e12d-9337-4090-bdaa-fdec65c55009)

- Results Area
  - At the end of game, the user will see his score.

![Screenshot 2024-08-15 201829](https://github.com/user-attachments/assets/d2ef2caf-7fc4-4300-bb50-0a43e97c2081)

- Timer
  - The quiz includes a countdown timer set to 60 seconds, adding an extra layer of challenge by limiting the time available to answer all questions.
  - The timer not only creates a challenge but also contributes to the game's dynamic pacing.
  - The timer is displayed in the playful "Rock Salt" font, which is also used for the title. This font choice loosens up the look and balances the overall design.

![Screenshot 2025-01-01 212548](https://github.com/user-attachments/assets/b6a9cc13-7dfb-462b-a3bc-06792eee92ff)

- Custom 404 Page
  - A customized 404 error page has been created to match the overall page styling, including the lightcyan background and a cohesive design.
  - According to the quiz topic, a line of text was used to let the user know that the page they were looking for does not exist.
  - Again, "Rock Salt" was used for title, as well as for the link.
  - This ensures a consistent user experience, even when encountering errors.

![Screenshot 2025-01-01 205454](https://github.com/user-attachments/assets/5b1b92bc-42df-479d-967e-c1424b4fae3b)

### Future Features
- Connect the application to a data base to easily increase the number of questions.
- Let user choose a music decade to play.
- Background styling matching the chosen decade to play.
- List of used songs at the end of the quiz, each song linked to either spotify or youtube.
## Testing
### Code Validation
HTML and CSS have been validated via W3C HTML Validator and the W3C CSS Validator. No errors came up.

![Screenshot 2024-08-14 223816](https://github.com/user-attachments/assets/e5ba8b58-0266-4564-9313-d0fedea53fe2)

![Screenshot 2024-08-14 223900](https://github.com/user-attachments/assets/b01f065c-ffc3-47f4-9bf6-ffb3068b783c)

Accessibility, as well as Performance, Best Practices and SEO were tested using Lighthouse in Chrome DevTool.

![Screenshot 2024-08-15 000558](https://github.com/user-attachments/assets/3a6ee0a4-129c-4ac9-b782-d119c040ca8d)

JavaScript was tested using [JSHint](https://jshint.com/) and came back with no errors.

![Screenshot 2024-12-31 115934](https://github.com/user-attachments/assets/f440f9f5-d09a-47d6-97bb-bcfc4ba5e11e)

### Manual Testing
| Feature | Expect | Action | Result |
| --- | --- | --- | --- |
| Rules | show rules, before game start | open website | Landing page shows rules |
| Start game | start game after reading rules | click "Challenge accepted" after reding rules | Game starts when button clicked |
| Feedback | get feedback if answer was correct | after choosing an answer, a color code shows if I was right | color coding works throughout all questions |
| Score | get final score | play game to end | final score is shown |
| Countdown Timer | timer starts at 60 seconds and counts down to 0 | start the quiz | timer displays the remaining time and stops at 0, triggering the "Time's up!" message |

### Fixed Bugs
- Bug: When the timer was up and the player wanted to play again, the game would start one question after the one where the timer ran out.
  - Solution: Reset the game state properly at the end of the quiz.
- Bug: After fixing the above, a new issue appeared where the game always showed 0 points if the timer ran out before all questions were answered.
  - Solution: Replaced ```setInterval``` with ```setTimeout``` to accurately handle the timer and ensure the score was calculated correctly. ```setInterval``` kept creating loops, whereas ```setTimeout``` provided a better solution by triggering once with accurate reset logic. This fix required trial and error, referencing Stack Overflow, and a little help from ChatGPT.

## Deployment
- The site was deployed using GitHub pages by following steps:
  - First open the repository on GitHub
  - Then select the settings tab
  - On the left hand side navigate to the "Code and Automation" section
  - There click on "Pages"
  - From the source section drop-down menu select the Main Branch and click "save"
  - The page will automatically be refreshed and the link appears
  - It may take a few minutes

### How to Fork
- Go to the repository on GitHub.
- Click the "Fork" button at the top right.
- This creates a copy of the repository under your GitHub account.

### How to Clone
- Open the repository (your fork or the original).
- Click the "Code" button and copy the URL.
- Open your terminal and type: git clone <URL>.
- Press Enter to download the repository to your computer.

## Technologies used
### Languages used
HTML, CSS and JavaScript
### Frameworks, Libraries and Programs used
- [Am I Responsive](https://ui.dev/amiresponsive) was used to verify responsiveness
- [Balsamiq](https://balsamiq.com/) was used to create the wireframes
- Chrome DevTools was used for overall development and regular testing
- [GitHub](https://github.com/) was used for version control and site deployment
- [GitPod](https://gitpod.io/) was used as development hosting platform
- [Google Fonts](https://fonts.google.com/) was used to import the font for the Header
- [Coolors](https://coolors.co/) was used to find a matching color for the chosen background color
## Credits
- for the code of the game [this tutorial](https://www.youtube.com/watch?v=PBcqGxrr9g8) was used
- Whilest I know all lyrics used by heart from countless singing along, Google search was used to make sure the lyrics are correct and don't contain spelling errors
## Acknowledgements
I could not have done this website without my mentor Rory Patrick Sheridan, who pointed in the right direction, when I felt lost. 
