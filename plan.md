The user wants to build a simple school system for registering learners' attendance.

**Plan:**

1.  **Set up the project:**
    *   Initialize a new React project using Vite.
    *   Install necessary dependencies (e.g., for form handling, date pickers, UI components).
    *   Configure Tailwind CSS for styling.

2.  **Design the UI components:**
    *   **Learner Registration Form:** Fields for learner's name, ID, class, etc.
    *   **Attendance Tracking Table:** Displays learners and their attendance status (Present, Absent, Late) for a selected date.
    *   **Date Selector:** Allows users to choose the date for attendance tracking.
    *   **Navigation:** Simple navigation to switch between registration and attendance views.

3.  **Implement core logic:**
    *   **State Management:** Use React's Context API or a state management library (like Zustand or Jotai) to manage learner data and attendance records.
    *   **Data Persistence:** Use Supabase as the backend to store learner information and attendance records. This will involve:
        *   Setting up a Supabase project.
        *   Creating database tables for `learners` and `attendance`.
        *   Implementing Supabase client-side logic for CRUD operations.
    *   **Attendance Recording:**
        *   When a date is selected, load existing attendance records for that date.
        *   Allow users to update the attendance status for each learner.
        *   Save changes to the Supabase database.

4.  **Testing and Validation:**
    *   Implement unit and integration tests.
    *   Ensure the application is responsive and user-friendly.
    *   Validate the build after completion.

**Agent Assignments:**

*   **Frontend Engineer:** To set up the project, create UI components, and implement the frontend logic.
*   **Supabase Engineer:** To set up the Supabase project, define database schema, and implement backend logic for data persistence.

**Note:** The Supabase Engineer will be involved after the initial frontend structure is in place and the need for database interaction is clear. The Frontend Engineer should prioritize creating the basic UI and user flows first.

**Initial Step:** The Frontend Engineer will start by setting up the project structure and creating the basic UI components for learner registration and attendance tracking. They will also need to generate any necessary images or assets.
    