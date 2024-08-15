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
The Design of the quiz is kept simple to avoid distraction.
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

  
### Futures Features
- Show timer, so the user knows how much time is left.
- Connect the application to a data base to easily increase the number of questions.
- Let user choose a decade to play.
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

![Screenshot 2024-08-15 201742](https://github.com/user-attachments/assets/e345f24b-2919-49c6-ac90-f405dfe299cf)

### Manual Testing
| Feature | Expect | Action | Result |
| --- | --- | --- | --- |
| Rules | show rules, before game start | open website | Landing page shows rules |
| Start game | start game after reading rules | click "Challenge accepted" after reding rules | Game starts when button clicked |
| Feedback | get feedback if answer was correct | after choosing an answer, a color code shows if I was right | color coding works throughout all questions |
| Score | get final score | play game to end | final score is shown |

## Deployment
- The site was deployed using GitHub pages by following steps:
  - First open the repository on GitHub
  - Then select the settings tab
  - On the left hand side navigate to the "Code and Automation" section
  - There click on "Pages"
  - From the source section drop-down menu select the Main Branch and click "save"
  - The page will automatically be refreshed and the link appears
  - It may take a few minutes

## Technologies used
### Languages used
HTML, CSS and JavaScript
### Frameworks, Libraries and Programs used
- [Balsamiq](https://balsamiq.com/) was used to create the wireframes
- [GitHub](https://github.com/) was used for version control and site deployment
- [GitPod](https://gitpod.io/) was used as development hosting platform
- [Google Fonts](https://fonts.google.com/) was used to import the font for the Header
- [Coolors](https://coolors.co/) was used to find a matching color for the chosen background color
## Credits
- for the game itself [this tutorial](https://www.youtube.com/watch?v=PBcqGxrr9g8) was used
- Google search was used to make sure the lyrics are correct and don't contain spelling errors
