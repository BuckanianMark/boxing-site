import './App.css'
import AppRoutes from './AppRoutes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {

  return (
    <>
      <div className='flex  w-[100vw] h-[100vh]'>
        <div className=' bg-[#e6fcfc] h-[100vw]' id='left'>
          <div className=''><Sidebar />
          </div>
          </div>
        <div className=' ' id='right'>
        <Navbar />
       
        <AppRoutes />
        <Footer />
        </div>
      
      </div>
    </>
  )
}

export default App
