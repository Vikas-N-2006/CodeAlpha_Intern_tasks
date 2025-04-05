# React To-Do List App

A clean, modern To-Do List application built with React that helps you track and manage your daily tasks efficiently.

## Features

- **Add Tasks**: Quickly add new tasks to your list
- **Complete Tasks**: Mark tasks as completed with a simple click
- **Delete Tasks**: Remove tasks you no longer need
- **Task Counter**: Visualize your progress with a task completion counter
- **Celebration Animation**: Get visual feedback when you complete all tasks
- **Clean UI**: Intuitive and attractive user interface
- **Responsive Design**: Works great on both desktop and mobile devices

## Technologies Used

- React.js (Hooks)
- CSS3 with modern features
- JavaScript ES6+

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
react-todo-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.jsx     # Main application component
│   ├── App.css     # Styling for the app
│   ├── index.js    # Application entry point
│   └── ...
└── package.json
```

## Usage

### Adding Tasks

1. Type your task in the input field at the top
2. Press Enter or click the "Add Task" button

### Completing Tasks

- Click on the checkbox or task text to mark it as complete
- The task counter will update to reflect your progress

### Deleting Tasks

- Click the "×" button on the right side of any task to remove it

## Customization

You can easily customize the app by modifying the CSS in `App.css`. Some aspects you might want to customize:

- Color scheme (primary colors are currently blue and green)
- Font family
- Animations and transitions
- Layout and spacing

## Future Enhancements

Potential features for future versions:

- Task categories and filtering
- Due dates and reminders
- Priority levels
- Dark mode
- Data persistence with localStorage or a backend
- Drag and drop reordering

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
