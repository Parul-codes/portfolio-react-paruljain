import { forwardRef } from "react";
import letter from '../assets/Springer Acceptance Letter 1 -.pdf'

interface ExperienceProps {
    scrollToContact: () => void;
}
const Experience = forwardRef<HTMLElement, ExperienceProps>(({scrollToContact}, ref) => {

  return (
    <section ref={ref} id="experience" className="text-center">
        <div className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            <h2>Professional Experience</h2>
        </div>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6'></div>
        <div className='text-lg text-gray-600 max-w-2xl mx-auto'>
            A journey of growth, innovation, and impactful contributions in the tech world.
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-36 mb-16">

            <div className="w-60 bg-white border-2 border-gray-100 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 ">🎓</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                    BTech
                </div>
                <div className="text-sm text-gray-600">
                    3rd Year Student
                </div>
            </div>

            <div className="w-60 bg-white border-2 border-gray-100 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 ">🧑‍💻</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                    Full Stack Developer
                </div>
                <div className="text-sm text-gray-600">
                    Current Role
                </div>
            </div>

            <div className="w-60 bg-white border-2 border-gray-100 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 ">🧩</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                    Active
                </div>
                <div className="text-sm text-gray-600">
                    Team Collaboration 
                </div>
            </div>
        </div>

        <div className="px-5 lg:px-48 max-w-screen-2xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-stretch mx-auto mb-8 mt-8">
            <div className = "bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
                <div className="flex flex-row gap-4 mb-5  ">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white px-3 py-1 text-sm font-semibold text-center m-auto">
                       Intern
                    </span>

                    <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 block mt-2">
                        Full Stack Developer 
                    </span>
                </div>

                <div className="flex flex-col md:items-end gap-2 text-gray-600 mb-2">
                    <div>
                        <span>
                            🏢
                        </span>
                        <span className="font-semibold">
                            Springer Capital
                        </span>
                    </div>
                    <div>
                        <span>
                           📍
                        </span>
                        <span>
                            Remote
                        </span>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="flex flex-col md:items-start gap-2 text-gray-600 mb-8">
                    <div>
                        <span>
                            📅
                        </span>

                        <span>
                            Oct 2025 - Present
                        </span>
                    </div>
                </div>

                <div className="flex flex-col ml-auto items-end gap-2 text-gray-600 mt-auto text-right mb-8">  
                    <p className="line-clamp-5"> Gained hands-on experience in full-stack development. 
                    Developed and maintained web applications using React, Node.js, and MongoDB, enhancing user experience and performance, 
                    delivering high-quality software solutions. </p>
                </div>

                <div className="mb-6">
                    <div className="flex items-start gap-2 text-gray-900 font-semibold mb-3 text-md">
                        <span>💡</span>
                        <span>Key Achievements</span>
                    </div>
                    <div>
                        <div className="flex items-start gap-2 text-gray-600 mb-2 text-right">
                            <span>✔️</span>
                            <div>Built responsive web applications with modern frameworks and libraries.</div>
                        </div>
                        <div className="flex items-start gap-2 text-gray-600 mb-2 text-right">
                            <span>✔️</span>
                            <div>Implemented best practices for code quality and performance</div>
                        </div>
                        <div className="flex items-start gap-2 text-gray-600 mb-2 text-right">
                            <span>✔️</span>
                            <div>Gained Industry level Experience working on real-world projects.</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="font-semibold text-gray-900 text-md text-right">Technologies Used</div>
                    <div className="flex flex-wrap justify-end gap-2 mt-5">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Express.js</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Git</span>
                    </div>
                </div>
                <div className="text-gray-500 cursor-pointer text-left mt-3 hover:text-gray-700">
                    <a href={letter} target="_blank" rel="noopener noreferrer"><span className="font-bold text-lg">→</span><button>View Acceptance Letter</button></a>
                </div>
            </div>

            <div className="hidden lg:block md:block w-1 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full justify-self-center"></div>

            <div className = "bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-dashed border-gray-300 h-full flex items-center justify-center">
                <div>
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">🌱</div>
                    <div className="text-lg font-semibold text-gray-500">Next Opportunity</div>
                    <p className="text-gray-400">Ready for new challenges and exciting projects.</p>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-3xl p-6 mt-12 m-4 inline-block shadow-xl border-gray-200 border-2">
            <div className="font-bold text-gray-900 text-2xl mb-4">Ready for the Next Challenge</div>
            <div className="text-gray-600 mt-5 mb-6 mx-auto text-center max-w-3xl px-12">
                <p>I'm always excited to take on new opportunities and contribute to innovative projects. 
                    Let's discuss how my experience can benefit your team.
                </p>
            </div>
            <button  onClick={scrollToContact} className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">Let's Connect</button>
        </div>
    </section>
  )
});

export default Experience
