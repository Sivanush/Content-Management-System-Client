
# Content Management System (CMS) - Client-Side (Angular)

This project is the frontend of a CMS for managing articles. It is built with Angular, providing users with a clean and intuitive interface to create, read, update, and delete articles. The frontend integrates seamlessly with a backend API, ensuring a smooth user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Running Unit Tests](#running-unit-tests)
- [Further Help](#further-help)

## Overview

The CMS frontend is developed using [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8. It includes components for article management, user authentication, and a dashboard view. This project is designed to provide a responsive user experience for managing content dynamically.

## Features

- **Article Management**: Create, edit, delete, and view articles.
- **User Authentication**: Secure login and registration.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dashboard**: Displays a list of all articles with CRUD functionality.
- **Angular Router**: Seamless navigation between different components and pages.
- **Error Handling**: Robust feedback mechanisms for users during actions like form submissions.

## Technologies Used

- **Angular 17.3.8**: Frontend framework for building the user interface.
- **Tailwind CSS**: For responsive and modern styling.
- **Angular Router**: Manages in-app navigation.
- **Angular Services**: Handles API integration with the backend.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory**:
   ```bash
   cd cms-client
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Development server**:
   Run the following command to start a local development server:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload if you make any changes to the source files.

2. **Building the project**:
   To build the project for production, use:
   ```bash
   ng build
   ```
   The build artifacts will be stored in the `dist/` directory.

## Project Structure

- **src/app**: Contains all the Angular components, services, and routing modules.
  - **components**: Includes components for article management and user authentication.
  - **services**: Handles HTTP requests and API integration.
  - **models**: TypeScript interfaces for defining the data structure (e.g., articles, users).
  - **app-routing.module.ts**: Defines routes for different pages (dashboard, article details, login, etc.).

## Running Unit Tests

To execute the unit tests, run:
```bash
ng test
```
The tests are executed via [Karma](https://karma-runner.github.io).

## Further Help

For more information on Angular CLI, use:
```bash
ng help
```
Or refer to the official [Angular CLI Documentation](https://angular.io/cli).
