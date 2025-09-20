import { forwardRef } from 'react';

const Home = forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <section ref={ref} id='Home'>

    </section>
  )
});

export default Home
