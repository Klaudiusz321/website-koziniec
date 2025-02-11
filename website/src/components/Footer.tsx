import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-8 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo i nazwa strony */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-red-500">GZK</a>
        </div>

        {/* Linki nawigacyjne */}
        <ul className="flex gap-6 text-gray-400">
          <li><a href="#home" className="hover:text-red-500 transition-colors duration-200">Sklep</a></li>
          <li><a href="#gallery" className="hover:text-red-500 transition-colors duration-200">O nas</a></li>
        </ul>

        {/* Ikony społecznościowe */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/gwiazdy_z_klasa/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-3.313 0-3.74.012-5.057.072-1.322.06-2.217.277-2.996.59-.774.312-1.41.732-2.048 1.37-.638.638-1.058 1.274-1.37 2.048-.313.779-.53 1.674-.59 2.996-.06 1.317-.072 1.744-.072 5.057s.012 3.74.072 5.057c.06 1.322.277 2.217.59 2.996.312.774.732 1.41 1.37 2.048.638.638 1.274 1.058 2.048 1.37.779.313 1.674.53 2.996.59 1.317.06 1.744.072 5.057.072s3.74-.012 5.057-.072c1.322-.06 2.217-.277 2.996-.59.774-.312 1.41-.732 2.048-1.37.638-.638 1.058-1.274 1.37-2.048.313-.779.53-1.674.59-2.996.06-1.317.072-1.744.072-5.057s-.012-3.74-.072-5.057c-.06-1.322-.277-2.217-.59-2.996-.312-.774-.732-1.41-1.37-2.048-.638-.638-1.274-1.058-2.048-1.37-.779-.313-1.674-.53-2.996-.59-1.317-.06-1.744-.072-5.057-.072zm0 1.8c3.224 0 3.615.012 4.891.072 1.237.057 1.903.26 2.35.434.465.182.798.4 1.15.751.351.351.569.684.751 1.15.174.447.377 1.113.434 2.35.06 1.277.072 1.667.072 4.891s-.012 3.615-.072 4.891c-.057 1.237-.26 1.903-.434 2.35-.182.465-.4.798-.751 1.15-.351.351-.684.569-1.15.751-.447.174-1.113.377-2.35.434-1.277.06-1.667.072-4.891.072s-3.615-.012-4.891-.072c-1.237-.057-1.903-.26-2.35-.434-.465-.182-.798-.4-1.15-.751-.351-.351-.569-.684-.751-1.15-.174-.447-.377-1.113-.434-2.35-.06-1.277-.072-1.667-.072-4.891s.012-3.615.072-4.891c.057-1.237.26-1.903.434-2.35.182-.465.4-.798.751-1.15.351-.351.684-.569 1.15-.751.447-.174 1.113-.377 2.35-.434 1.277-.06 1.667-.072 4.891-.072zm0 5.4c-3.642 0-6.6 2.958-6.6 6.6s2.958 6.6 6.6 6.6 6.6-2.958 6.6-6.6-2.958-6.6-6.6-6.6zm0 1.8c2.646 0 4.8 2.154 4.8 4.8s-2.154 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.154-4.8 4.8-4.8zm6.6-2.4c-.663 0-1.2.537-1.2 1.2s.537 1.2 1.2 1.2 1.2-.537 1.2-1.2-.537-1.2-1.2-1.2z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61559163152972&rdid=wmG1Y6VIWTFPk6t4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FvozjJeE6Pnk7gKNw%2F" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.623h3.13V8.413c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.465.099 2.797.143v3.24l-1.919.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        © 2025 Gwiazdy z Klasą. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
