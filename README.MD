# Sudoku Solver

This is a simple web-based Sudoku Solver application. It allows users to fetch a new Sudoku puzzle and solve it using a backtracking algorithm.

## Project Structure

The project contains the following files:

- `index.html`: The main HTML file that defines the structure of the web page.
- `style.css`: The CSS file that styles the web page.
- `index.js`: The JavaScript file that handles the Sudoku fetching and solving logic.

## Files Overview

### `index.html`

This file contains the HTML structure of the application. It includes a grid for displaying the Sudoku puzzle, buttons for fetching and solving the puzzle, and a footer with a link to the GitHub repository.

### `style.css`

This file contains the CSS styles for the application. It ensures that the Sudoku grid and buttons are displayed correctly and styled consistently.

### `index.js`

This file contains the JavaScript logic for the application. It fetches a new Sudoku puzzle from an API and solves it using a backtracking algorithm.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/RahulBhikundia/Sudoku_solver.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd Sudoku_solver
   ```
3. **Open `index.html` in your web browser**.

## How It Works

- The `index.html` file defines a 9x9 grid for displaying the Sudoku puzzle.
- The `style.css` file provides the styling for the grid and buttons.
- The `index.js` file contains functions to:
  - Fetch a new Sudoku puzzle from an external API.
  - Display the puzzle in the grid.
  - Solve the puzzle using a backtracking algorithm.

### Fetching a New Puzzle

When the "Get Puzzle" button is clicked, the `GetPuzzle` function sends a request to the Sudoku API and fills the grid with the fetched puzzle.

### Solving the Puzzle

When the "Solve Puzzle" button is clicked, the `SolvePuzzle` function attempts to solve the puzzle using a backtracking algorithm and fills the grid with the solution.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Sudoku API](https://sugoku.onrender.com) for providing the Sudoku puzzles.

## Author

- Rahul Bhikundia

## Contributing

Feel free to submit issues or pull requests if you want to contribute to this project.
