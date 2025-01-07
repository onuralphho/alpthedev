export interface IAlert{
    shown:boolean,
    message:string
}

export type AlertContextType = {
    alert:any,
    setAlert:any
}