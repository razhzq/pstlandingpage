import { useState } from 'react';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../images/background.png'
import { Button } from '../ButtonElement'


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return ( 
        <HeroContainer id='home'>
             <HeroBg>
                 <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
             </HeroBg>
             <HeroContent>
                 <HeroH1>Revolutionising NFTs</HeroH1>
                 <HeroP>
                 Community will always be at our heart here at WaffleNFT.{"\n"}
                 Our main goal is and always has been bringing REAL utility to our holders.{"\n"}
                 Head on to our whitelist competition and grab your seats. 
                



                 </HeroP>
                 <HeroBtnWrapper>
                     <Button to="signup" onMouseEnter={onHover} 
                                         onMouseLeave={onHover}
                                         primary="true"
                                         dark="true"
                                         smooth={true}
                                         duration={500}
                                         spy={true}
                                         exact='true'
                                         offset={-80}
                                         onClick={() => window.location.href = "https://gleam.io/Ltgua/wafflenft-whitelist-competition"}
                                         >
                         Go to Whitelist {hover ? <ArrowForward /> : <ArrowRight />}
                     </Button>
                 </HeroBtnWrapper>
             </HeroContent>
        </HeroContainer>
     );
}
 
export default HeroSection;

