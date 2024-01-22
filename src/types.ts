export type RGBColor = FixedArray<number, 3>
export type RGBAColor = FixedArray<number, 4>

  type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

// Range - From F to T, excluding T
export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type GrowToSize<T, N extends number, A extends T[]> = 
  A['length'] extends N ? A : GrowToSize<T, N, [...A, T]>;

export type FixedArray<T, N extends number> = GrowToSize<T, N, []>;

export type TokenData = {
  hash: string
  tokenId: string
}