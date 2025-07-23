import BlueShadowText from "../components/BlueShadowText";

const Home = () => {
    return (
        <div className='flex flex-col'>
            <figure class="css-3mn275 e1197rjj0">
                <img alt="A commuter walks past the closed gates of New Jersey Transit Ticketing area at Penn Station, New York, NY, USA." fetchpriority="high" width="1280" height="720" decoding="async" data-nimg="1" style="color:transparent" sizes="(min-width: 960px) 700px, 95vw" srcset="https://www.economist.com/cdn-cgi/image/width=360,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 360w, https://www.economist.com/cdn-cgi/image/width=384,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 384w, https://www.economist.com/cdn-cgi/image/width=480,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 480w, https://www.economist.com/cdn-cgi/image/width=600,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 600w, https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 834w, https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 960w, https://www.economist.com/cdn-cgi/image/width=1096,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 1096w, https://www.economist.com/cdn-cgi/image/width=1280,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 1280w, https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg 1424w" src="https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20250726_FNP501.jpg" />
                <figcaption class="css-1dkrsla e15o9k8g2"><span class="css-1st60ou e15o9k8g1">
                    Photograph: Alamy</span></figcaption></figure>
            <div className='flex justify-center align-center mt-10'>
                <img className="rounded-full w-44 border-2 border-black" src='https://avatars.githubusercontent.com/u/85759165?v=4' alt="github avatar" />
            </div>
            <h1 className='text-3xl text-center mt-5 font-bold font-mono'>
                Deidar3
            </h1>

            <h1 className='text-xl text-center mt-5 font-bold font-mono'>
                CTF/Wargames Writeups 👨🏻‍💻
            </h1>    
            <div className='mt-5 flex flex-row align-center justify-center'>
                <a className='p-2' href='#about'>About me 👀</a>
                <p className='mt-1 mx-2 text-2xl'>|</p>
                <a className='p-2' target="_blank" href='https://github.com/Deidar3/'>GitHub 🧨</a>
            </div>

            <div className='flex justify-center align-center mt-5'>
                <div className='w-2/5 border-t-2 border-gray-500'></div>
            </div>
            
            <div className='flex flex-col align-center justify-center mx-auto'>
                <BlueShadowText text="Writeups" />
                <div className='flex flex-col w-1/2'>
                    <a href="#pwnablekr-bof">
                        <div className='p-3 bg-gray-100 mb-5 w-[280px] sm:w-[400px] md:w-[600px] rounded-sm '>
                                Pwnable.kr - bof
                        </div>
                    </a>
                </div>


            </div>

        </div>
    );
}

export default Home;