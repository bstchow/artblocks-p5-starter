import { TokenData } from "../types"
import { ArtBlocksRandom } from "./artBlocksRandom"

export class Configuration {
    tokenData: TokenData

    /**
     * Seed for perlin noise.
     * Perlin parameter "size" in p5 is currently 4096 (2^12 = PERLIN_SIZE constant + 1) float numbers between 0 & 1.
     * p5.noiseSeed takes in Javascript number (2^64)
     */
    perlinNoiseSeed: number 
    random: ArtBlocksRandom

    constructor(tokenData: TokenData) {
        this.random = new ArtBlocksRandom(tokenData)
        this.tokenData = tokenData
        console.log("Configuration: ", JSON.stringify(this))
    }
}