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


Body
   NavBar
   Route=/ => Feed
   Route=/login => login
   Route=/connection => connections
   Router=/profile => profile