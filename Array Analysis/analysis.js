const analysis = {
    average:(array)=>{
       return array.reduce((sum,next) => sum+next , 0)/Math.round(array.length)
    },
    min: (array)=>{
        return array.reduce((a,b)=>{
            if(a<b){return a}
            else {return b}
        },9999)
    },
    max: (array)=>{
        return array.reduce((a,b)=>{
            if(a<b){return b}
            else {return a}
        },0)
    },
    length: (array)=>{
        return array.length
    }
}

module.exports = analysis