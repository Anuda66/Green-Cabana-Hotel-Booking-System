import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="-mb-10 bg-green-900">
                <div className="py-12 mx-5 my-10 max-w-7xl md:mx-10 lg:mx-20">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                                Green Cabana
                            </h3>
                            <p className="mt-4 text-sm text-white">
                                An eco-luxury safari resort nestled in the heart of untouched wilderness. Where nature meets elegance.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                                Quick Links
                            </h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="/" className="text-sm text-white hover:text-primary">Home</a></li>
                                <li><a href="/cabanas" className="text-sm text-white hover:text-primary">Cabanas</a></li>
                                <li><a href="/experiences" className="text-sm text-white hover:text-primary">Experiences</a></li>
                                <li><a href="/gallery" className="text-sm text-white hover:text-primary">Gallery</a></li>
                                <li><a href="/about" className="text-sm text-white hover:text-primary">About</a></li>
                                <li><a href="/contact" className="text-sm text-white hover:text-primary">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                                Experiences
                            </h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="/experiences" className="text-sm text-white hover:text-primary">Safari Tours</a></li>
                                <li><a href="/experiences" className="text-sm text-white hover:text-primary">Jungle Trekking</a></li>
                                <li><a href="/experiences" className="text-sm text-white hover:text-primary">Bird Watching</a></li>
                                <li><a href="/experiences" className="text-sm text-white hover:text-primary">River Kayaking</a></li>
                                <li><a href="/experiences" className="text-sm text-white hover:text-primary">Spa & Wellness</a></li>
                                <li><a href="/experiences" className="text-sm text-white hover:text-primary">Stargazing</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                                Contact
                            </h3>
                            <div className="mt-4">
                                <p className="text-sm text-white">
                                    Green Valley Wildlife Reserve, Tropical Highlands
                                </p>
                                <p className="mt-1 text-sm text-white">
                                    +1 (555) 234-5678
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 mt-12 border-t border-gray-200">
                        <p className="text-sm text-center text-white">
                            &copy; 2026 Flego Innovation. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
