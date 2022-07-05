export const getItem = key => {
    try{
        return JSON.parse(localStorage.getItem(key))
    }catch (e){
        console.log('Error getting data from local storage')
        return null
    }
}

export const setItem = (key, data) =>{
    try{
        localStorage.setItem(key, JSON.stringify(data))
    }catch (e){
        console.log('Error setting data to local storage')
    }
}

export const deleteItem = key => {
    try{
        localStorage.removeItem(key)
    }catch (e){
        console.log('Error deleting data from local storage')
    }
}
