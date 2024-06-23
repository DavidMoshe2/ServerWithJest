To manage separate environment configuration files for development (dev) and production (prod) environments in a Node.js project, you can create multiple .env files, one for each environment. Here’s a step-by-step guide on how to set this up using the dotenv package:

Step 1: Install dotenv
If you haven’t already, install the dotenv package in your Node.js project:

bash
Copy code
npm install dotenv
Step 2: Create environment-specific .env files
Create two .env files in the root of your project:

.env.development for development environment variables
.env.production for production environment variables
For example, your .env.development might look like this:

makefile
Copy code
DB_HOST=localhost DB_USER=root DB_PASS=devpassword API_KEY=dev_api_key_here PORT=3000
And your .env.production might look like this:

makefile
Copy code
DB_HOST=prod_db_host DB_USER=prod_user DB_PASS=prodpassword API_KEY=prod_api_key_here PORT=8080
Step 3: Configure dotenv to load the correct file
Modify your main JavaScript file (e.g., index.js or app.js) to load the appropriate .env file depending on the environment. You can use the NODE_ENV environment variable to determine the current environment:

javascript
Copy code
const dotenv = require('dotenv'); // Determine which .env file to load based on the NODE_ENV value const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'; // Load the environment variables from the appropriate file dotenv.config({ path: envFile }); console.log(process.env.DB_HOST); // Output will depend on the active .env file
Step 4: Set NODE_ENV when running your application
When you run your application, you'll need to set the NODE_ENV environment variable to either development or production. Here’s how you can do this:

For development:
bash
Copy code
NODE_ENV=development node app.js
For production:
bash
Copy code
NODE_ENV=production node app.js
Step 5: Update .gitignore
Ensure that all your .env files are listed in your .gitignore to prevent them from being committed to your version control system:

Copy code
.env.development .env.production
Optional: Scripts in package.json
For convenience, you can add scripts in your package.json to start your application in development or production mode:

json
Copy code
"scripts": { "start": "node app.js", "dev": "NODE_ENV=development node app.js", "prod": "NODE_ENV=production node app.js" }
Now, you can run npm run dev for development mode or npm run prod for production mode.

This setup allows you to easily manage and switch between different environments with their respective configurations, keeping your sensitive data secure and your application configuration flexible.

