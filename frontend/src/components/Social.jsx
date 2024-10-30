import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex gap-2">
      <a href="#" className="hover:text-yellow-400"><FaFacebook size="2em"/></a>
      <a href="#" className="hover:text-yellow-400"><FaSquareXTwitter size="2em"/></a>
      <a href="#" className="hover:text-yellow-400"><FaLinkedin size="2em"/></a>
      <a href="#" className="hover:text-yellow-400"><FaInstagram size="2em"/></a>
    </div>
  )
}
