# Qwik Scroll Issue Demo

This repository contains a demo for the Qwik scroll issue. Follow the instructions below to clone and start the repository:

## Cloning the Repository

1. Open a terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

   ```bash
   git clone https://github.com/Sport-Thieme/qwik-scroll-issue
   ```

## Starting the Repository

1. Navigate into the cloned repository's directory:

   ```bash
   cd qwik-scroll-issue
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

The application should now be running at `http://localhost:5173`.

# Issue Description

This repository demonstrates an unexpected behavior in Qwik related to the `<a>` element and the Qwik `Link` element when used for scrolling to an element with a specific id.

## `<a>` Element Behavior

The `<a>` element behaves as expected, scrolling to the target element when clicked, until a `routeAction$` is called upon form submission. After the form submission, clicking on the `<a>` element has no effect. This behavior is consistent both when running the application locally and on Stackblitz.

## Qwik `Link` Element Behavior

The behavior of the Qwik `Link` element differs between running the application locally and on Stackblitz.

### Local Environment

In a local environment, the `Link` element neither scrolls to the target element nor opens the `details` element, even before form submission.

### Stackblitz Environment

On Stackblitz, the `Link` element behaves as expected, both before and after form submission. It scrolls to the target element and opens the `details` element when clicked.

## Testing the Issue

Detailed instructions on how to test this issue will be displayed on the screen when you run the application.
