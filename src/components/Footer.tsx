import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primaryPurple text-white p-4 flex justify-between items-center">
      <div>
        <p>
          Copyright © 2024 Rádio Cuquema. Todos os direitos reservados. |
          Desenvolvido por
          <Link
            to="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-bold text-lg hover:underline hover:text-yellow-300 ml-1 transition-all"
          >
            <span className="drop-shadow-lg">Império Salomão</span>
          </Link>
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail className="text-2xl hover:text-gray-300" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-2xl hover:text-gray-300" />
        </a>
        <a
          href="https://wa.me/123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl hover:text-gray-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-gray-300" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-2xl hover:text-gray-300" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-gray-300" />
        </a>
      </div>
    </footer>
  );
};
