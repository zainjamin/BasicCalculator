const operate = (x, y, opp) => {
  if(typeof opp !== 'string') return 'error';
  switch (opp){
    case '+':
      return x+y;
    case '-':
      return x-y;
    case '*':
      return x*y;
    case '/':
      if(y === 0) return 'error';
      return x/y;
    default:
      return 'Invalid opperation';
  }
};