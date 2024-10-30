import { useNavigate } from 'react-router-dom'
import Social from "./Social";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-10 bg-zinc-800 text-zinc-50 p-20 divide-x divide-zinc-700">
      <div className="flex flex-col">
        <div className="text-6xl text-yellow-400 font-serif">
            Tata
        </div>
        <div className="text-justify">
        Welcome to Tata Library! Our library is a place of knowledge, learning, and community. With a diverse collection of books, resources, and comfortable spaces, we’re dedicated to supporting your growth, curiosity, and connection with others. Discover new ideas, enjoy a peaceful environment, and let us be part of your journey to knowledge.
        </div>
      </div>
      <div className="flex flex-col gap-5 pl-5">
        <div className="font-bold text-xl text-yellow-400 ">Quick Links</div>
        <div className="flex flex-col gap-2">
          <div onClick={() => navigate('/')} className="cursor-pointer hover:text-yellow-400 active:bg-blue-600">Home</div>
          <div onClick={() => navigate('/about')} className="cursor-pointer hover:text-yellow-400">About</div>
          <div onClick={() => navigate('/blog')} className="cursor-pointer hover:text-yellow-400">Blog</div>
          <div onClick={() => navigate('/contact')} className="cursor-pointer hover:text-yellow-400">Contact</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 pl-5">
        <div className="font-bold text-xl text-yellow-400">Heading</div>
        <div>Content</div>
      </div>
      <div className="flex flex-col gap-5 justify-center pl-5">
        <div className="font-bold text-xl text-yellow-400">Follow Us</div>
        <Social />
      </div>
    </div>
  )
}
