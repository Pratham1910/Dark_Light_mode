# Dark and Light Theme Toggle


This project implements a simple **Dark Mode / Light Mode toggle** using plain JavaScript. It allows toggling the entire page theme as well as a specific container within the page.

## Features

- Toggle full-page dark/light mode.
- Toggle dark/light mode for a specific container.
- Responsive toggle using checkbox input elements.

## How It Works

There are **two toggle switches**:

1. **Main Theme Toggle**
   - Controlled via the checkbox with ID: `#form`.
   - When checked, adds the `.dark` class to the `body`.
   - When unchecked, removes the `.dark` class from the `body`.

2. **Container Theme Toggle**
   - Controlled via the checkbox with ID: `#form2`.
   - When checked, adds the `.dark2` class to the container with ID `#childContainer`.
   - When unchecked, removes the `.dark2` class from the container.

