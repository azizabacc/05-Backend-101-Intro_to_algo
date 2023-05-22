// sort an array

function sort(tab){
    for(let j=0;j<tab.length;j++){
        let min = tab[0];
        for( let i=1;i<tab.length-j;i++){
            if(tab[i]<tab[i-1]){
                min= tab[i];
                tab[i]=tab[i-1];
                tab[i-1]=min;
            }
        }
    }
    
}
module.exports = {sort};
