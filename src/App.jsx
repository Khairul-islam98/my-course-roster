import { useState } from 'react'
import './App.css'
import CourseCards from './components/CourseCards/CourseCards'
import CardItems from './components/CardItems/CardItems'
import Home from './components/Home/Home'
import toast, { Toaster } from 'react-hot-toast'


function App() {
  const [course, setCourse] = useState([]);
  const [creditItem, setCreditItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  

  const handleCard = (title, credit, price) => {
    const existItem = course.find(item => item === title);
    if (existItem) {
      toast.error('Already added');
    } else {
      if (creditItem + credit <= 20) {
        const newCourse = [...course, title];
        setCourse(newCourse);
        handleCredit(credit);
        handleTotalPrice(price);
      } else {
        toast.error('Not enough credit!');
      }
    }
  }

  const handleCredit = (credit) => {
    if (creditItem + credit <= 20) {
      const newCredit = creditItem + credit;
      setCreditItem(newCredit);
    }
  }

  

  const handleTotalPrice = (price) => {
    const newPrice = price + totalPrice;
    setTotalPrice(newPrice);

  }

  return (
    <>
      <Toaster></Toaster>
      <div className='py-8'><Home></Home></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <main className="w-full md:w-3/4">
            <div>
              <CourseCards handleCard={handleCard}></CourseCards>
            </div>
          </main>
          <aside className="w-full md:w-3/12">
            <div>
              <CardItems course={course} creditItem={creditItem} totalPrice={totalPrice}></CardItems>
            </div>
          </aside>
        </div>
      </div>

    </>
  )
}

export default App
