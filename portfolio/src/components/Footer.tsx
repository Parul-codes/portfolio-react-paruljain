interface FooterProps {
  scrollToTop: () => void;
}

const Footer = ({ scrollToTop }: FooterProps) => {

  return (
    <div className='bg-gray-900 text-gray-400 p-4 w-full text-[17px] mt-auto'>
      <div className='max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          © 2025 Parul Jain. Built with ❤️ using React and Tailwind CSS.
        </div>
        <div className='hover:text-white hover:-translate-y-2 duration-300'>
          <a className='cursor-pointer' onClick={scrollToTop}>Back to Top &uarr;</a>
        </div>
      </div>
      <div className='p-4 border-t-2 border-gray-800 flex items-center justify-center text-center'>
        Interested in working together? Let's create something amazing.
      </div>
    </div>
  )
};

export default Footer;