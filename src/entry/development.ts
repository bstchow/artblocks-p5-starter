import p5 from 'p5';
import {draw, setup, windowResized} from '../canvas/base.p5';
import { generateRandomTokenData } from '../debug/helpers';
import { Configuration } from '../generation/configuration';

export const sketch = (p: p5) => {
    const tokenData = generateRandomTokenData()
    const config = new Configuration(tokenData)
    p.setup = () => setup(config, p)
    p.draw = () => draw(p)
    p.windowResized = () => windowResized(p)
}

export const myp5 = new p5(sketch, document.getElementById('container'));