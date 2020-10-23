function type_check_v1(attr, type){
    if(attr === null){
        return true;
    }else{
        return (typeof attr === type);
    }
}