import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between p-5 bg-zinc-800 text-zinc-50">
      <div onClick={() => navigate('/')} className="cursor-pointer text-2xl">
        Logo
      </div>
      <div className="flex gap-5">
        <div onClick={() => navigate('/')} className="cursor-pointer">Home</div>
        <div onClick={() => navigate('/about')} className="cursor-pointer">About</div>
        <div onClick={() => navigate('/blog')} className="cursor-pointer">Blog</div>
        <div onClick={() => navigate('/contact')} className="cursor-pointer">Contact</div>
      </div>
      <div onClick={() => navigate('/register')} className="cursor-pointer">
        Sign Up
      </div>
    </div>
  )
}
