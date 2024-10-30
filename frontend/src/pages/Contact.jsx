import ContactForm from "../components/ContactForm";
import ContactText from "../components/ContactText";

export default function Contact() {
  return (
    <div>
        <div className="text-6xl h-72 font-bold text-yellow-400 flex justify-center items-center bg-[url('./public/Contact-bg.jpg')] bg-center bg-cover">
            Contact Us
        </div>
        <div className="grid grid-cols-2 p-5 m-5 divide-x-2">
            <ContactText />
            <ContactForm />
        </div>
    </div>
  )
}
