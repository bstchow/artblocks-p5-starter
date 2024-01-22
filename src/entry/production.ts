import type p5Type from 'p5';

declare let window: p5Type & any;
declare const tokenData: TokenData;

import * as canvasBase from '../canvas/base.p5';
import { Configuration } from '../generation/configuration';
import { TokenData } from 'src/types';

const config = new Configuration(tokenData)
const p5 = window

function setup(): void {
    canvasBase.setup(config, p5)
}

function draw(): void {
    canvasBase.draw(p5)
}

function windowResized(): void {
    canvasBase.windowResized(p5)
}

window.setup = setup
window.draw = draw
window.windowResized = windowResized