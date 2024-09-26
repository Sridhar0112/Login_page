
import React, { Suspense } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import CalendarPage from "./pages/CalendarPage" 




const LazyLogin=React.lazy(()=>import("./pages/Login"))
const LazySignup=React.lazy(()=>import("./pages/Signup"))
const LazyForgetPassword=React.lazy(()=>import("./pages/ForgetPassword"))
const LazyCalendar=React.lazy(()=>import ("./pages/CalendarPage"))

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Suspense fallback={<div><h1>Loading... your content</h1></div>}><LazyLogin /></Suspense>}/>
      <Route path="/signup" element={<Suspense fallback={<div><h1>Loading...your content</h1></div>}><LazySignup /></Suspense>}/>
      <Route path="/forgetpassword" element={<Suspense fallback={<div><h1>Loading...your content</h1></div>}><LazyForgetPassword /></Suspense>}/>
      <Route path="/CalendarPage" element={<Suspense fallback={<div><h1>Loading... your content</h1></div>}><LazyCalendar /></Suspense>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  
  );
}

export default App;
