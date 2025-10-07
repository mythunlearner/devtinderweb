# DevTinder Web
- Cretaed a vite + React application
- Remove unnecessary files and code  and create a Hello world app
- install tailwind css
- install Daisy UI
- Add Navbar component to App.jsx
- Create a NavBar.jsx seperate component file
- Install react router dom
- create BrowserRouter > Routes > Route=/ Body> RouteChildren
- create an Outlet in your Body Component
- create a footer
- create a Login page
- Install axios
- CORS - install cors in backend = > add middleware to with configurations: origin, credentials: true
- Whenever you're making API call so pass axios => { withCredentials : true}
- Install Redux Toolkit -
- install react-redux + @reduxjs/toolkit =>
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools ins chrome 
- Login and see data is coming in store
- Navbar should show one user login
- refactored code added constant and creaetd component folder 
- you should not be access other routes without login
- if token is not present, redirect  user to login  page.
- Logout Feature
- Get the Feed and add the feed in the store 
- build the user card on the feed
- Edit profile Feature
- Show Toast Message on save profile
- See all my conections 
- See all my connection request
- Feature - Accept/Reject Connection Request
- Send / Ignore the user card from the feed




Body
   NavBar
   Route=/ => Feed
   Route=/login => login
   Route=/connection => connections
   Router=/profile => profile




   # Deployment
   - Sign up on AWS
   - Launch  instance
   - chmod 400 <secret>.npm 
   - ssh -i "devTinder-secret.pem" ubuntu@ec2-51-21-191-0.eu-north-1.compute.amazonaws.com
   - Install node version v20.13.1
   - Git clone 
   - Front End 
      - npm install
      - npm run build
      - sudo apt update
      - sudo apt install nginx
      - sudo systemctl start nginx
      - sudo systemctl enable nginx 
      - Copy code from dist(build files) to nginx server ==> /var/www/html
      - sudo scp -r dist/* /var/www/html
      - Enable port :80 of your 
   - Backend
      - updated DB password
      - allowed ec2 instance pulic ip on mongo db server
      - installed  npm install pm2 -g
      - pm2 start npm -- start or pm2 start mpm --name "devtinder-backend" -- start
      - pm2 logs
      - pm2 list, pm2 flush <name>, pm2  stop <name>, pm2 delete <name>
      - config nginx - /etc/nginx/sites-available/
      - restart nginx - sudo systemctl restart nginx
      - Modify the BASEURL in frontend project to "/api"


   # Adding a custom Domain name
   - purchased domain name from godaddy
   - signup on cloudflare & add a new domain name
   - change the nameservers on godaddy and point to cloudflare
   - wait for sometime till your nameserver are updated
   - DNS : record in cloudflare (A record )
   - Enable Full SSL 

   # Sending Email via SES
   -  Create an IAM user
   -  Give Access to AmazonSESFullAccess
   -  Amazon SES: Create an Identity
   -  Verify your domain name
   -  Verify an email address [ either using domain / email address] you have configured
   - Install AWS SDK - v3
     -code Excample : https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples



     # Scheduling cron jobs in NodeJs
     - Installing node-cron
     - Learning about cron expression syntax - crontab.guru
     - Schedule a Job
     - date-fns
     - Find all the unique email Id who have got connection Request in Previous day
     - Send Email
     - Explore que mechanism to send bulk emails
     - Amazon SES Bulk Email Sending
     - Make sendEmail function dynamic
     - bee-queue & bull npm package( to handle quque mechanism) 