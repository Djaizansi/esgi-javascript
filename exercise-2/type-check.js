function type_check_v1(attr, type){
    if(typeof attr === 'object'){
        if(attr === null) return true;
        if(Array.isArray(attr)) return true;
    }else{
        return (typeof attr === type);
    }
}