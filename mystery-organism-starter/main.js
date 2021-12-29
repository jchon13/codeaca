// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (numbers,bases) =>
{
  return {
    numbers,
    bases,
    mutate(dna)
    {
      let holder = returnRandBase()
      while (holder === bases[dna])
      {
        holder =returnRandBase();
      }
      bases[dna] = holder;
    },
    compareDNA(sample)
    {
      let similar = 0;
      for(let i = 0; i < sample.length; i++)
      {
        if (sample[i] === bases[i])
        {
          similar= similar + 1;
        };
      }
      let percentage = similar/(sample.length) * 100;
      console.log(`Sample #1 and Sample #2 have ${percentage}% DNA in common`);
    },
    willLikelySurvive()
    {
      let counter = 0;
      for(let i = 0; i < bases.length; i ++)
      {
        if (bases[i] === 'C' || bases[i] === 'G')
        {
          counter += 1;
        }
      }
      if ((counter/bases.length) >= 0.6 )
      {
        return true;
      }
      else
      {
        return false;
      }
    },
  }
}

/*let a =pAequorFactory(2,mockUpStrand());
let b = mockUpStrand();
console.log(a);
console.log(a.willLikelySurvive());*/

let thirtyGoods = [];
let samples = 0;

while(thirtyGoods.length < 30)
{
  let test = pAequorFactory(samples,mockUpStrand())
  if (test.willLikelySurvive() === true)
  {
    thirtyGoods.push(test);
  }
  else{};
  samples=samples+1;
}

console.log(samples);

console.log(thirtyGoods.length)

