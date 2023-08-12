import Mark from "./../../image/mar.png"
import './nav.css'


export default function NavBar() {

    return (<>
        <div className="bg-fuchsia-900 h-20 text-white">
            <h1 className="w-10 h-10 float-left cursor-pointer"></h1>
            <ul className="pr-4 flex space-x-5 py-2 justify-end">
                <li className="font-semibold font-serif cursor-pointer">HOME</li>
                <li className="font-semibold font-serif cursor-pointer">ABOUT</li>
                <li className="font-semibold font-serif cursor-pointer">CAREER</li>
                <li className="font-semibold font-serif cursor-pointer">SERVICE</li>
                <li className="font-semibold font-serif cursor-pointer">HELP</li>
            </ul>
        </div>
        <section className="bg-fuchsia-900 h-96 ">
            <div className="pt-20 w-1/2 float-left mt-10">
                <h1 className="text-white font-black text-6xl not-italic font-serif">Digital Marketing</h1>
                <p className="  text-white text-base font-light ">Digital marketing is a dynamic and ever-evolving field that encompasses a wide range of
                    online strategies and tactics aimed at promoting products, services, or brands.
                    It leverages various digital channels such as social media, search engines, email,
                    and websites to reach and engage with target audiences. The key advantage of digital marketing lies in its ability to precisely target
                    specific demographics, track campaign performance in real-time, and adjust strategies for optimal results.</p>
            </div>
            <div>
                <img src={Mark} className="w-1/2 h-1/2" />
            </div>
        </section>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#701A75" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,133.3C320,117,400,107,480,138.7C560,171,640,245,720,250.7C800,256,880,192,960,165.3C1040,139,1120,149,1200,181.3C1280,213,1360,267,1400,293.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
        </div>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                    <div class="lg:w-full w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-center">Pitchfork Kickstarter Taxidermy</h1>
                        <div class="h-1 w-20 bg-indigo-500 rounded display-inline-block"></div>
                    </div>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}