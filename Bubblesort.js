function playbubblesort()
{
   if(progresschecker)
   return;
progresschecker=true;
    const copy=[...array];
   const moves= Bubblesort(copy);
   animate(moves);

    
}

function Bubblesort(array)
{
    const moves=[];
   do{
       var swapped=false;
       for(let i=0;i<array.length;i++)
      {
        moves.push({indices:[i-1,i],type:"comp"});

         if(array[i-1]>array[i])
         {
             swapped=true;
             moves.push({indices:[i-1,i],type:"swap"});
             [array[i-1],array[i]]=[array[i],array[i-1]];
         }
      }
    }while(swapped);
    return moves;

}