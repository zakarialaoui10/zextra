import { ZikoUIElement } from "ziko"
class ZikoUIList extends ZikoUIElement{
    constructor({ type = 'ol' } = {}, ...items){
        super(type)
    }
    sort(){

    }
    filter(){
        
    }
}

const List = ({ type = 'ol'} = {}, ...items) => {

    return new ZikoUIList(...items)
}
