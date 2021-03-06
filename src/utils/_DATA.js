let phones = {
    Techno:{
        brand: "Techno",
        inCart: 'false'
    },
    Apple:{
        brand: "Iphone",
        inCart: 'false'
    },
    Samsung:{
        brand: "Samsung",
        inCart: 'false' 
    },
    Huawei:{
        brand: "Hauwei",
        inCart: 'false' 
    },
    HTC:{
        brand: "HTC",
        inCart: 'true' 
    }
}

export function _getPhones(){
    return new Promise((res, rej)=>{
        setTimeout(()=> res({...phones}), 1000);
    });
}

export function setInCart({id, inCart}){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            phones={
                ...phones,
                [id]:{
                    ...phones[id],
                    inCart: inCart
                }
            }
            res()
        }, 500);        
    });
}

