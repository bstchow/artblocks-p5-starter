// Taken from Art Blocks documentation:
// https://docs.artblocks.io/creator-docs/creator-onboarding/readme/#safely-deriving-randomness-from-the-token-hash
export class ArtBlocksRandom {
    public useA: boolean
    public prngA: () => number
    public prngB: () => number

    constructor(tokenData: {hash: string}) {
      this.useA = false;
      const sfc32 = function (uint128Hex) {
        let a = parseInt(uint128Hex.substring(0, 8), 16);
        let b = parseInt(uint128Hex.substring(8, 16), 16);
        let c = parseInt(uint128Hex.substring(16, 24), 16);
        let d = parseInt(uint128Hex.substring(24, 32), 16);
        return function () {
          a |= 0;
          b |= 0;
          c |= 0;
          d |= 0;
          const t = (((a + b) | 0) + d) | 0;
          d = (d + 1) | 0;
          a = b ^ (b >>> 9);
          b = (c + (c << 3)) | 0;
          c = (c << 21) | (c >>> 11);
          c = (c + t) | 0;
          return (t >>> 0) / 4294967296;
        };
      };
      // seed prngA with first half of tokenData.hash
      this.prngA = sfc32(tokenData.hash.substring(2, 34));
      // seed prngB with second half of tokenData.hash
      this.prngB = sfc32(tokenData.hash.substring(34, 66));
      for (let i = 0; i < 1e6; i += 2) {
        this.prngA();
        this.prngB();
      }
    }
    // random number between 0 (inclusive) and 1 (exclusive)
    random_dec() {
      this.useA = !this.useA;
      return this.useA ? this.prngA() : this.prngB();
    }
    // random number between a (inclusive) and b (exclusive)
    random_num(a, b) {
      return a + (b - a) * this.random_dec();
    }
    // random integer between a (inclusive) and b (inclusive)
    // requires a < b for proper probability distribution
    random_int(a, b) {
      return Math.floor(this.random_num(a, b + 1));
    }
    // random boolean with p as percent liklihood of true
    random_bool(p) {
      return this.random_dec() < p;
    }
    // random value in an array of items
    random_choice(list) {
      return list[this.random_int(0, list.length - 1)];
    }

    /**
     * Random value in an enum weighted according to weights
     * @param enumWeightedMapping Requires weights to be non-negative, integers which sum to less than 100.
     */
    random_enum<T extends string | number | symbol>(enumWeightedMapping: Record<T, number>): T {
      const sum = Object.values<number>(enumWeightedMapping).reduce((a: number, b: number) => a + b, 0)
      if(sum > 100) {
        throw new Error(`Weights sum to greater than 100`);
      };
      const seed = this.random_num(0, sum)
      let accumulator = 0;
      const entries = Object.entries<number>(enumWeightedMapping) as Array<[T, number]>;
      for(const [key, value] of entries) {
        if(value < 0) {
          throw new Error(`Negative weight for ${key.toString()}`);
        };

        if(!Number.isInteger(value)) {
          throw new Error(`Non-integer weight for ${key.toString()}`);
        }

        if(seed <= accumulator + value) {
          return key;
        }
        accumulator += value;
      }
      throw new Error(`Failed to find random enum value for ${enumWeightedMapping}`)
    }
}