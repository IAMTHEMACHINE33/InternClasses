# TASK

Create an API for event management. Here the admin can create a event with necessary fields (title, description, thumbnail, seats, price etc.) and users can register to those events. Also write test for your code.

### In user's end

- Send a confirmation mail to the user after successful registration

### In admin's end

- create a cronjob that sends today's list of events to the admin user in email
- cronjob must be configurable via .env
- use email teplates for styling it

### Tools to use

- Node.js, Express.js, Typescript, Typeorm, nodemailer, cron, jest, mjml

## Resources

[npmjs](https://www.npmjs.com/)
