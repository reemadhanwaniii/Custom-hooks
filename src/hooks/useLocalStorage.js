import { useState } from "react";

function useLocalStorage(key,value) {

    const [storedValue,setStoredValue] = useState(getValue);

    function getValue(key) {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : value;
        } catch (error) {
            console.log(error);
            return value;
        }
    }
    function setValue(value) {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key,JSON.stringify(valueToStore));
            setStoredValue(valueToStore);
        } catch (error) {
            console.log(error);
            return;
        }
    }
    function removeValue() {
        try {
          window.localStorage.removeItem(key);
          setStoredValue(value);  
        } catch (error) {
            console.log(error);
            return;
        }
    }

    return [getValue,setValue,removeValue];
}

export default useLocalStorage;