import { forwardRef } from "react"

const Projects = forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <section ref={ref} id="project">
      <div className='text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4'>
        <h2>Featured Projects</h2>
      </div>
      <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6'></div>
      <div className='text-lg text-center text-gray-600 max-w-2xl mx-auto'>
        A showcase of recent projects demonstrating my technical expertise and problem-solving abilities
      </div>


      <div className=" text-white flex justify-center mt-14">
        <a href="https://github.com/Parul-codes">
          <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">View All Projects on GitHub</button>
        </a>
      </div>
    </section>
  )
});

export default Projects
