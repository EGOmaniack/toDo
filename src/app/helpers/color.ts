export const lightenDarkenColor = (col: string, amt: number): string => {
    if (col[0] !== 'r') {
      let usePound = false;
    
      if (col[0] === '#') {
          col = col.slice(1);
          usePound = true;
      }
    
      let num = parseInt(col, 16);
    
      // tslint:disable-next-line:no-bitwise
      let r = (num >> 16) + amt;
    
      if (r > 255) {
       r = 255;
      } else if (r < 0) {
        r = 0;
      }
    
      // tslint:disable-next-line:no-bitwise
      let b = ((num >> 8) & 0x00FF) + amt;
    
      if (b > 255) {
        b = 255;
      } else if (b < 0) {
        b = 0;
      }
    
      // tslint:disable-next-line:no-bitwise
      let g = (num & 0x0000FF) + amt;
    
      if (g > 255) {
        g = 255;
      } else if (g < 0) {
        g = 0;
      }
    
      // tslint:disable-next-line:no-bitwise
      return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
    } else {
      return col;
    }
  };