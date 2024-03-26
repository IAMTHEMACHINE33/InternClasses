# Final Month Task Board

### Technologies to use

- Node.js
- Typescript
- Express.js
- PostgreSQL
- Typeorm
- WebSocket
- React (if you are familiar) etc.

---

## TOC

| NAME           | TASK                                                | STATUS |
| -------------- | --------------------------------------------------- | ------ |
| Anup Maharjan  | [Real time chat application](#TASK_1)               | []     |
| Mukesh Pajiyar | [Discord message broadcasting application](#TASK_2) | []     |
| Madav Dhungana | [Social media](#TASK_3)                             | []     |
| Nikesh Sapkota | [Real time collaborative application](#TASK_4)      | []     |
| Sankalpa KC    | [Web scrapping and presentation](#TASK_5)           | []     |

---

## TASK_1: Real time chat application

### Assignee: Anup Maharjan

### Features:

- User Authentication:
  Users should be able to create accounts or log in using existing credentials.
  Passwords should be securely hashed and stored.

- Chat Rooms:
  Users should be able to create new chat rooms or join existing ones.
  Each chat room should display a list of current members.
  Messages sent in a room should be visible to all members of that room in real-time.

- Real-Time Messaging:
  Implement WebSocket communication for real-time messaging between clients and the server.
  Messages should be sent and received instantly without the need for page reloads.

- Notifications:
  Users should receive notifications when they are mentioned in a chat message or when a new message is posted in a room they are a member of.
  Notifications should be delivered in real-time and displayed in a non-intrusive manner.

- User Interface:
  Design a user-friendly interface for the chat application using the library/framework as your preference.

## TASK_2: Discord message broadcasting application

### Assignee: Mukesh Pajiyar

### Features:

- Discord Integration:
  Integrate the application with the Discord API to enable message broadcasting to Discord servers and channels.
  Authenticate users and obtain necessary permissions to send messages to specified servers or channels.

- Message Broadcasting:
  Implement a user-friendly interface for composing and sending broadcast messages.
  Allow users to select target Discord servers or channels for message distribution.
  Support the customization of message content, including text formatting and embedded media.

- Scheduling and Automation:
  Provide options for scheduling message broadcasts at specific dates and times.
  Implement automation features to enable recurring message broadcasts according to predefined schedules.

## TASK_3: Social media

### Assignee: Madav Dhungana

### Features:

- User Registration and Authentication:
  Implement user registration functionality, allowing users to create accounts with unique usernames and passwords.
  Develop authentication mechanisms to secure user accounts and protect sensitive information.

- Profile Management:
  Enable users to create and customize their profiles with personal information, profile pictures, and cover photos.
  Provide options for users to update their profiles, add bio descriptions, and manage privacy settings.

- Friend Connections:
  Implement friend request functionality to allow users to connect with each other.
  Enable users to send, accept, and decline friend requests, building a network of connections within the platform.

- Post Sharing and Interaction:
  Enable users to create and share posts, including text, images, videos, and links.
  Implement features for liking, commenting, and sharing posts to encourage user engagement and interaction.
  Display post feeds tailored to each user's connections and preferences, promoting relevant content discovery.

- Conversation and Messaging:
  Allow users to engage in private conversations by sending direct messages to their friends.
  Implement a messaging system with real-time message delivery and notifications.
  Enable users to create group conversations and add multiple participants for collaborative discussions.

- Notification System:
  Develop a notification system to alert users about new friend requests, messages, likes, comments, and other relevant activities.
  Ensure notifications are delivered promptly and provide users with options to manage notification preferences.

## TASK_4: Real time collaborative application

### Assignee: Nikesh Sapkota

### Features:

- User Authentication:
  Implement user authentication functionality, allowing users to create accounts or log in using existing credentials.
  Ensure secure authentication mechanisms to protect user accounts and data.

- Canvas Drawing and Editing:
  Enable users to draw and sketch on a shared canvas using a variety of drawing tools such as pens, pencils, brushes, and erasers.
  Implement shape drawing tools for creating geometric shapes (e.g., rectangles, circles, polygons).
  Provide text annotation tools for adding text labels and annotations to the canvas.

- Real-Time Collaboration:
  Enable real-time collaboration features, allowing multiple users to edit the same canvas simultaneously.
  Ensure synchronization of changes across all connected clients in real-time, maintaining consistency and coherence.
  Implement cursor tracking to display the position of each user's cursor on the canvas.

## TASK_5: Web scrapping and presentation

### Assignee: Sankalpa KC

### Features:

- Web Scraping:
  Develop web scraping scripts to extract stock market data from the chosen stock website.
  Extract key data points such as stock prices, volume, market cap, P/E ratio, and other relevant financial metrics.

- Scheduled Cron Jobs:
  Configure cron jobs to schedule scraping tasks at predefined intervals during market hours.
  Specify the start and end times for the scraping window to ensure data collection only occurs when the market is open.

- Data Storage and Management:
  Design a database schema to store the scraped stock market data, including historical and real-time data points.
  Implement mechanisms for efficient data storage, retrieval, and indexing to support analysis and querying.

- Gainers/Losers:
  Listout top 10 losers and gainers
