import { addTodo } from "../Actions/action"

const initialstate={
    list:[]
}
// const [list,setList]




const Reducer=(state=initialstate,action)=>{
switch(action.type){
    case "ADD_TODO":
        const{id,data} = action.payload ;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                    data:data
                }
            ]
            }
    case "DELETE_TODO":
        // const{id,data} = action.payload ;
    const newList=    state.list.filter((ele)=>ele.id!= action.id)
            return {
                ...state,
                list: newList
                
            
            }


            case "REMOVE_TODO":
                return {
                    ...state,
                    list:[]
                }
   
    //  return default  
    default: return state;

}

}

export default Reducer 