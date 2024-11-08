
import { IStorage } from './Interface.util'

const keepData = (key:string, data:any | string) =>{
    let result: string = '';
    if (typeof(data) ==='object') {
        result = JSON.stringify(data)
    } else {
        result = data;
    }
    localStorage.setItem(key, result);
    

}

const fetchData = (key:string): string | null=>{
    const data = localStorage.getItem(key);
    return data ? data : '';

}

const storage: IStorage = {
    keepData: keepData,
    fetchData: fetchData

}
 export default storage
