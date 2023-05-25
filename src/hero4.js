import wave from './wave.svg'

const Hero4 = () => {
    return ( 
               <div className="bg-gradient-to-r from-[#274685] to-[#3db3c5] h-screen bg-no-repeat bg-cover relative" >
                  <img src={wave} alt="" className='absolute z-[10] w-screen bottom-[-5rem]'/>
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex">
            <div className=" animate__animated animate__fadeInUp">
            <h1>HUBUNGI KAMI</h1>
           <p className=" my-6">Tetap terhubung dengan kami</p>
            </div>
        </div>
        </div>
     );
}
 
export default Hero4 ;
        