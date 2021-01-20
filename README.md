# Minesweeper

## Project Description

Minesweeper is an Airtable and React build that mirrors the classic PC game Minesweeper. From the homepage, the user is able to play a game of minesweeper. The user must clear a board containing hidden "mines" without "detonating" any of them, with help from clues about the number of neighboring mines in each non-mine cell on the board. If sucesseful, the user's time will be tabulated to a leaderboard, requiring the user's name. (The user will be able to edit the name of their leaderboard standings).

## Wireframes

The wireframe below depicts the homepage and leaderboard for Minesweeper in web format. The homepage contains a timer keeping track of the users progress, and the game board containing an array of clickable cells, with each reavealing more of the hidden game board. The leaderboard button in the top right-hand corner routes to the leaderboard page which tabulates username, ranking, and user time. The edit button on the lower right-hand corner of that page allows for the user to edit the name of their posted scores.

![imageAlt](https://wireframe.cc/ut5FUe)

## Component Hierarchy

![imageAlt](https://i.imgur.com/PhRA82l.png)

## API and Data Sample

https://airtable.com/tblSWWslEIgCor7aj/viwTMcThgq096TUMO?blocks=hide

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recCLDT6v38PtnfIw",
            "fields": {
                "rank": 1,
                "username": "Abrasive Antwon",
                "time": "0:30"
            },
            "createdTime": "2021-01-20T09:42:16.000Z"
        },
        {
            "id": "recnVoFPhy3cATBkt",
            "fields": {
                "rank": 2,
                "username": "Bashful Bethany",
                "time": "0:35"
            },
            "createdTime": "2021-01-20T09:42:16.000Z"
        },
        {
            "id": "recWTHN0kQg5l7VWj",
            "fields": {
                "rank": 3,
                "username": "Crazy Coraline",
                "time": "0:40"
            },
            "createdTime": "2021-01-20T09:42:16.000Z"
        }
    ],
    "offset": "recWTHN0kQg5l7VWj"
}

```

### MVP/PostMVP

#### MVP

- Game board with clickable cells that uncover and accurately hint at the number of neighboring 'mines'.
- A timer that tracks the users progress.
- Post successful minesweeper scores to the leaderboard and on Airtable.
- Use forms to edit only the name of leaderboard posts that the user is responsible and update Airtable.

#### PostMVP

- Improve UX with Bootstrap and advanced CSS
- Allow user to choose difficulty level (board size and number of "mines")
- Add difficulty-level field to Airtable and create algorithm to give user scores based on time and difficulty level

## Project Schedule

| Day    | Deliverable                                | Status     |
| ------ | ------------------------------------------ | ---------- |
| Jan 20 | Proposal Approval / Airtable Setup         | Pending    |
| Jan 20 | Component Creation / Get, Set, Edit Data   | Incomplete |
| Jan 21 | Cell Revealing / Timer                     | Incomplete |
| Jan 22 | Jan 21 cont'd / Post Scores to Leaderboard | Incomplete |
| Jan 23 | Bootstrap / Advanced CSS                   | Incomplete |
| Jan 25 | Presentations                              | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested |
| ------------------------- | :------: | :------------: | :-----------: |
| Proposal                  |    H     |      3hrs      |     _hrs      |
| Airtable setup            |    H     |     .5hrs      |     _hrs      |
| Game Board                |    H     |      1hr       |     _hrs      |
| Cells                     |    H     |      3hrs      |     _hrs      |
| Timer                     |    H     |      2hrs      |     _hrs      |
| Game Play                 |    H     |      6hrs      |     _hrs      |
| Leaderboard               |    H     |     .5hrs      |     _hrs      |
| Posting to Leaderboard    |    H     |      4hrs      |     _hrs      |
| Leaderboard Edit          |    H     |      2hrs      |     _hrs      |
| Play Again?               |    H     |      2hrs      |     _hrs      |
| Bootstrap/Advanced CSS    |    H     |      5hrs      |     _hrs      |
| Total                     |    n/a   |     29hrs      |     _hrs      |

## SWOT Analysis

### Strengths:

As far as functionality and UX design go I know exactly what I want. I can circumvent the hours of brainstorming required for both of those tasks, and will better spend my effort carefully planning the logic of game-play.

### Weaknesses:

Especially in the realm of game-play I recognize the lack of detail in my plan. A majority of class exercises dealt with the basics of React and GET/POST/PUT/DELETE requests, so outside resources and careful planning will guide me towards MVP.  My component hierarchy is a solid foundation.

### Opportunities:

I am extremely excited at the prospect of pushing my base knowledge of React to the limits. Getting, Posting, Putting, and Deleting from API's is extremely important in business application, and I see no better way to showcase my understanding of those concepts than in an interactive project that I am passionate about.

### Threats:

The two largest challenges I anticipate are updating the leaderboard (so that rankings are re-assigned and displayed in order), and dealing with gameplay (the revealing of hidden cells).
