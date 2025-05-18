
import { Route, Routes } from 'react-router-dom'
import Allcourses from './components/Allcourses'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Popular from './components/Popular'
import Stories from './components/Stories'
import Trustsection from './components/Trustsection'
import Coursedetail from './components/Coursedetail'
import Footer from './components/Footer'

function App() {


  return (
    
 <div className="app ">
<Routes>
  <Route path='/' element={<>
    <Nav/>
  <Hero/>
  <Allcourses/>
  <Trustsection/>
  <Popular/>
  <Stories/>
  <Faq/>
  <Footer/>
  </>}></Route>
  <Route path='courseDetails/:id' element={<Coursedetail/>}></Route>
</Routes>

  
 </div>
  )
}

export default App
