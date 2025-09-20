import { forwardRef } from "react"

const Skills = forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <section ref={ref} id="skill" className='flex flex-col items-center justify-center'>
        <div className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            <h2>Skills & Technologies</h2>
        </div>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6'></div>
        <div className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Technologies and tools I use to bring ideas to life
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='w-9/12 flex flex-wrap justify-center gap-4 mb-12'>
            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        ⚛️
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        React
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        📘
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        TypeScript
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        💛
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        JavaScript
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🟢
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Node.js
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🎨
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Tailwind CSS
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🍃
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Mongo DB
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🐢
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Express.js
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        ☕
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Java
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🧠
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        DSA
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🌐
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Rest APIs
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        📝
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Git & GitHub
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🚀
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        Deployment & Hosting
                    </span>
                </div>
            </div>

            <div className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        🤖
                    </span>
                    <span className='text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300'>
                        AI Integration
                    </span>
                </div>
            </div>
        </div>

        <div className='bg-gradient-to-r from-blue-50 to-teal-50 border border-gray-200 rounded-2xl px-6 py-8 shadow-md max-w-screen-lg text-center'>
            <div className='font-semibold text-gray-900 mb-4 text-xl'>
                Always Learning & Growing
            </div>
            <div className='text-gray-600'>
                I'm passionate about staying up-to-date with the latest technologies and continuously expanding my skill set. I'm always eager to learn new tools and frameworks to enhance my development capabilities.
            </div>
        </div>
    </section>
  )
});

export default Skills
