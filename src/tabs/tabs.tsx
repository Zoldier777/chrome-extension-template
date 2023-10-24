    
import React from 'react';
import Blacklisted from './components/Blacklisted';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import Links from './components/Links'
import Heading from './components/Heading'

const Tabs = () => {
    return (
        <div> 
        <Parallax pages={2} >
        <ParallaxLayer 
                offset={0}
                speed={1}
                factor={1}
                style={{
                    backgroundImage: `url(./background1.jpg)`,
                    backgroundSize: '100% 100%',  
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}>
                <Heading text='Stay focused'/></ParallaxLayer>
        <ParallaxLayer 
        offset={1}
        speed={1}
        factor={1}
        style={{
            backgroundImage: `url(./background2.jpg)`,
            backgroundSize: '100% 100%', 
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: -1,
        }}>
        <Heading text="Let's head back"/> <Links/> </ParallaxLayer>
        </Parallax>
      
    </div>
    )
}
export default Tabs;