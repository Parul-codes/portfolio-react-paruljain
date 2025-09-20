import { forwardRef } from 'react';

const Contact = forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <section ref={ref} id="Contact">
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center'>
          <h2>Let's Work Together</h2>
        </div>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6'></div>
        <div className='text-lg text-gray-600 max-w-2xl mx-auto text-center'>
          I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
        </div>

        <div className='mt-20 text-center'>
          <div>
            <h3 className='text-2xl font-semibold text-gray-900 mb-10'>Get In Touch</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-4 lg:mx-auto'>
              <div className='bg-gray-50 rounded-2xl text-center p-6'>
                <div className='w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4'>📍</div>
                <p className='font-lg text-gray-900 font-semibold'>Location</p>
                <p className='text-gray-600'>Madhya Pradesh, India</p>
              </div>
              <div className='bg-gray-50 rounded-2xl text-center p-6'>
                <div className='w-12 h-12 bg-red-300 rounded-full flex items-center justify-center mx-auto mb-4'>📩</div>
                <p className='font-lg text-gray-900 font-semibold'>Email</p>
                <p className='text-gray-600'>jainparul301@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='mb-20'>
            <h3 className='text-2xl font-semibold text-gray-900 my-10'>Connect With Me</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-4 lg:mx-auto'>
              <a href="mailto:jainparul301@gmail.com" className='flex flex-col items-center gap-6 mb-4 bg-white hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 rounded-2xl pl-4 py-4 hover:scale-y-105 hover:-translate-y-2 hover:shadow-xl'>
                <div className='bg-gradient-to-r from-red-500 to-red-600 rounded-full p-3'>✉️</div>
                <div>
                  <p className='font-lg text-gray-900 font-semibold mb-2'>Email</p>
                  <p className='text-gray-600'>jainparul301@gmail.com</p>
                  <div className='mt-2'>🔗</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/enggparul-jain216" className='flex flex-col items-center gap-6 mb-4 bg-white hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 rounded-2xl pl-4 py-4 hover:scale-y-105 hover:-translate-y-2 hover:shadow-xl'>
                <div className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-3'>💬</div>
                <div>
                  <p className='font-lg text-gray-900 font-semibold mb-2'>LinkedIn</p>
                  <p className='text-gray-600'>@enggparul-jain216</p>
                  <div className='mt-2'>🔗</div>
                </div>
              </a>

              <a href="https://github.com/Parul-codes" className='flex flex-col items-center gap-6 mb-4 bg-white hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 rounded-2xl pl-4 py-4 hover:scale-y-105 hover:-translate-y-2 hover:shadow-xl'>
                <div className='bg-gradient-to-r from-gray-700 to-gray-800 rounded-full p-3'>💡</div>
                <div>
                  <p className='font-lg text-gray-900 font-semibold mb-2'>GitHub</p>
                  <p className='text-gray-600'>@Parul-codes</p>
                  <div className='mt-2'>🔗</div>
                </div>
                
              </a>
            </div>

          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
