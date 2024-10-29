import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-5 bg-zinc-800 text-zinc-50 font-bold">
      <div onClick={() => navigate('/')} className="cursor-pointer text-2xl text-yellow-400">
        Logo
      </div>
      <div className="flex gap-5">
        <div onClick={() => navigate('/')} className="cursor-pointer hover:text-yellow-400">Home</div>
        <div onClick={() => navigate('/about')} className="cursor-pointer hover:text-yellow-400">About</div>
        <div onClick={() => navigate('/blog')} className="cursor-pointer hover:text-yellow-400">Blog</div>
        <div onClick={() => navigate('/contact')} className="cursor-pointer hover:text-yellow-400">Contact</div>
      </div>
      <div onClick={() => navigate('/register')} className="cursor-pointer text-yellow-400 hover:bg-yellow-400 hover:text-zinc-50 pt-2 pb-2 pl-3 pr-3 border rounded">
        Sign Up
      </div>
    </div>
  )
}
