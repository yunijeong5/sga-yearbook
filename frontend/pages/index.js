// Imports
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Image from "next/image";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Index () {
    return (
        <div className="bg-image">
            <div className>
                <div className="about-bg">
                    <div className="bg-gradient-transparent">
                        <Navbar />
                    </div>
                </div>
                <div className="details">
                    <div className="big-img">
                        <Image src= '/index2005.jpg' alt="site logo" width={500} height={500} />
                    </div>
                    <div className="box">
                        <div className="row">
                            <h2>2022 Yearbook</h2>
                        </div>
                        <p><div style={{ fontWeight: 'bold' }}>Preorder your 2022 UMass yearbook at the discounted price of $20 for a limited time!</div> Your preorder today will be available for pickup on-campus in late-April and early-May of 2022, at the end of the Spring semester.  If you would like to order a yearbook with domestic shipping instead, we will begin offering shipping as an option in December-January.  Please follow our socials at @umassindex on Instagram for updates and pertinent information!</p>
                        <p>The Index is UMass Amherst’s student-published yearbook, and the oldest yearbook in New England, having originally been published in 1870.  It chronicles anything and everything about UMass undergraduate student life, including memories, current events, clubs, agencies, athletics, student works of art, and lots of pictures.  For seniors, the yearbook also includes the graduating class, ordered by academic college, and signature pages.  In the 2021-2022 academic year, the Index is resuming publication after a 16-year hiatus!
                        </p>
                        <Button type="submit" href="https://adamlechowicz.github.io/redir" className="button" variant="light">Add to Cart</Button>
                    </div>
                </div>
                <Footer className='footer-wrapper' />
            </div>
        </div>
        
    );
}
