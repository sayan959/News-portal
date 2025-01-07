export function showCurrenDate(){
    const today = new Date();
    const day = today.toLocaleString('en-us',{weekday:'long'});
    const month = today.toLocaleString('en-us',{month:'long'});
    const date = today.getDate();
    const year = today.getFullYear();

    return `${day},${month},${date},${year}`;
    
}