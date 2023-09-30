import { useState } from 'react'
import './App.css'
import CourseCards from './components/CourseCards/CourseCards'
import CardItems from './components/CardItems/CardItems'
import Home from './components/Home/Home'


function App() {

  return (
    <>
      <div className='py-8'><Home></Home></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <main className="w-full md:w-3/4">
              <div>
                <CourseCards></CourseCards>
              </div>
            </main>
            <aside className="w-full md:w-3/12">
              <div>
                <CardItems></CardItems>
              </div>
            </aside>
          </div>
        </div>
      
    </>
  )
}

export default App
