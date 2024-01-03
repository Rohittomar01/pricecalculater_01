import { createContext, useState } from "react";


type FormContextType={
    data:any;
    setData:any;
}
type FormDataProps={
    children:React.ReactNode;
}

export const FormContext = createContext<null | FormContextType>(null);

 export const FormData=({children}:FormDataProps)=>{

    const[data,setData]=useState<FormContextType | null>(/* initial value */ null);

    return(
        <FormContext.Provider value={{data,setData}}>
            {children}
        </FormContext.Provider>
    )


}