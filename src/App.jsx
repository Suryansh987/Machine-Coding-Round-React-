import { Outlet, useLocation } from 'react-router-dom'
import './index.css'

function App() {

  const { pathname } = useLocation();


  return (
    <>
      <h1 className={`text-6xl text-center font-inter font-[700] pt-20 
        ${pathname === '/course-list'? 'text-[#4F6F52]' : (pathname === '/table' ? 'text-[#444B79]' : 'text-white')} mb-8`}>Chai Aur Code</h1>
      <div className="fixed bottom-10 right-10 rounded-2xl overflow-hidden">
        <a href="https://chaicode.com/" target='_blank'><img width='90px' height='90px' src="/image.png" alt=""/></a>
      </div>
      <style>{`body { background-color: ${pathname === '/course-list' ? '#D2E3C8' : (pathname === '/table' ? '#E2BBE9' : '#3F72AF')}; }`}</style>
      <Outlet />
    </>

  )
}

export default App
