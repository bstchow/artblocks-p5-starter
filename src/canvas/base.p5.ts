import type p5Type from 'p5'
import { Configuration } from 'src/generation/configuration'

const FRAME_RATE = 16;

let config: Configuration

export const setup = (_config: Configuration, p5: p5Type): void => {
  config = _config
  const displayCanvas = p5.createCanvas(1000, 1000, p5.WEBGL);
  displayCanvas.style('margin', '0 auto');
  displayCanvas.style('display', 'block');
  p5.frameRate(FRAME_RATE);
}

export const draw = (p5: p5Type) => { 
  p5.clear(255, 0, 255, 255);
  p5.noStroke();
}


export const windowResized = (p5: p5Type) => { 
}