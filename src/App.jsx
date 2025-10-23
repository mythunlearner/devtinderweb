import { BrowserRouter,Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import ContactUs from "./components/ContactUs"
import RefundPolicy from "./components/RefundPolicy"
import PrivacyPloicy from "./components/PrivacyPolicy"
import TermsOfServices from "./components/TermsOfServices"
import Premium from "./components/Premium"
function App() {
  

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
       <Routes>
          <Route path="/" element={<Body/>}> 
            <Route path="/" element={<Feed/>}> </Route>
             <Route path="/login" element={<Login/>}> </Route>
             <Route path="/profile" element={<Profile/>}></Route> 
             <Route path="/connections" element={<Connections/>}></Route> 
             <Route path="/requests" element={<Requests/>}></Route> 
             <Route path="/contactus" element={<ContactUs/>}></Route>
             <Route path="/refundpolicy" element={<RefundPolicy/>}></Route>
             <Route path="/privacypolicy"element={<PrivacyPloicy/>}></Route>
             <Route path="/terms"element={<TermsOfServices/>}></Route>
             <Route path="/premium" element={<Premium/>}> </Route>
          </Route>
         
         
       </Routes>
    </BrowserRouter>
   </Provider>
    </>
  )
}

export default App
