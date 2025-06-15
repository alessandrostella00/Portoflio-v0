
declare module "poly-decomp/build/decomp.js" {
  interface VerticesArray extends Array<[number, number]> {}
  interface DecompPolygon {
    area(): number;
    clockwise(): boolean;
    isSimple(): boolean;
    makeCCW(): void;
    removeCollinearPoints(): void;
    // etc. (extend as needed)
  }
  const decomp: any;
  export default decomp;
}
