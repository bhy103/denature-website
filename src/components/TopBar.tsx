export default function TopBar() {
  return (
    <div className="bg-[#8B4513] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:info@denature.com" className="text-sm hover:text-[#FFD700]">
              Email Us | info@denature.com
            </a>
            <span className="text-sm">|</span>
            <a href="tel:+61410811935" className="text-sm hover:text-[#FFD700]">
              Call Us | 0410 811 935
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">
              Facebook
            </a>
            <span>|</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">
              X
            </a>
            <span>|</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">
              Instagram
            </a>
            <span>|</span>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">
              YouTube
            </a>
            <span>|</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 