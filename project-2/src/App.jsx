import ContactForm from "./components/ContactForm/ContactForm"
import Contactheader from "./components/ContactHEader/Contactheader"
import Navbar from "./components/Navigation/Navbar"
import './app.css';

function App() {


  return (
    <div >
   <Navbar />
   <main className="main">
    <Contactheader />
   <ContactForm />
   </main>
    </div>
  )
}

export default App
