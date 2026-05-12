// HeroSection.jsx
import coverImage from '../assets/cover.jpg';

const Hero = () => {
    return (
        <div
            className="relative flex items-center justify-center w-full min-h-screen text-white -z-10"
            style={{
                backgroundImage: `url(${coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content — pt-24 so text clears the navbar height */}
            <div className="relative z-10 w-full px-4 pt-24 pb-16 mx-auto max-w-7xl sm:pb-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-flex items-center px-6 py-1 text-base font-medium text-white border border-gray-500 rounded-full bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-sm">
                        <p>Eco-Luxury Safari Resort</p>
                    </div>
                    <h1 className="text-6xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
                        Stay Wild.
                        <br />
                        <span className='text-green-600'>Stay Green.</span>
                    </h1>
                    <p className="max-w-lg mx-auto mt-6 text-xl text-blue-100">
                        Immerse yourself in nature's luxury. Eco-cabanas hidden<br /> within an untouched jungle paradise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <a href="/apps" className="inline-flex items-center px-6 py-3 text-base font-medium bg-green-900 border border-transparent rounded-full shadow-sm cursor-pointer text-primary bg-accent hover:bg-green-700">
                            Reserve Your Escape
                        </a>
                        <a href="/about" className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-gray-500 rounded-full bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-sm">
                            Explore Cabanas
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;