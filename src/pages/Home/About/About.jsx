import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute border-8 border-white right-10 top-1/2 rounded-lg shadow-2xl" />

    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <h2 className='text-xl text-[#FF3811] font-bold'>About Us</h2>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
      <button className="btn text-white bg-[#FF3811]">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;