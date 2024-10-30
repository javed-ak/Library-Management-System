export default function Footer() {
  return (
    <div className="grid grid-cols-4 gap-10 h-96 bg-zinc-800 text-zinc-50">
      <div className="">
        <div className="text-6xl flex justify-center items-center text-yellow-400">
            Logo
        </div>
        <div>
        Welcome to [Library Name]! Our library is a place of knowledge, learning, and community. With a diverse collection of books, resources, and comfortable spaces, we’re dedicated to supporting your growth, curiosity, and connection with others. Discover new ideas, enjoy a peaceful environment, and let us be part of your journey to knowledge.
        </div>
      </div>
      <div className="gap-5">
        <div onClick={() => navigate('/')} className="cursor-pointer hover:text-yellow-400 active:bg-blue-600">Home</div>
        <div onClick={() => navigate('/about')} className="cursor-pointer hover:text-yellow-400">About</div>
        <div onClick={() => navigate('/blog')} className="cursor-pointer hover:text-yellow-400">Blog</div>
        <div onClick={() => navigate('/contact')} className="cursor-pointer hover:text-yellow-400">Contact</div>
      </div>
      <div>

      </div>
    </div>
  )
}
