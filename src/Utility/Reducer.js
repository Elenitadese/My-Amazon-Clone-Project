import { Type } from "./action.type"

// then we initialize initial state 

// we use array to count
export const initialState = {
    basket:[], user:null
}

export const reducer = (state, action)=>{

    switch (action.type) {
// case one
        case Type.ADD_TO_BASKET:
            // check if the item exists we use find method since our basket is array
            
            const existingItem = state.basket.find((item)=>item.id === action.item.id)
            if (!existingItem) {
                return {
                  ...state,
                  //it keep the state but on basket due to action it add (speed operater used to keep our state) (yebefitochunm add mnaregewnm meyaz sllebet stateachnn keep mareg alebn ...action.item, amount:1 )
                  basket: [...state.basket, { ...action.item, amount: 1 }],
                };
            }
            else{
                // it exist so 
                const updatedBasket = state.basket.map((item)=>(
                    item.id ===action.item.id? {...item,amount:item.amount +1}  : item
                ))
                return{
                    ...state,
                    basket:updatedBasket
                }
            }
                
// case two
            case Type.REMOVE_FROM_BASKET: {
  const updatedBasket = state.basket
    .map((item) =>
      item.id === action.id
        ? { ...item, amount: item.amount - 1 }
        : item
    )
    .filter((item) => item.amount > 0);


  return {
    ...state,
    basket: updatedBasket,
  };
}  

// case 3
    case Type.EMPTY_BASKET:
    return{
        ...state,
        basket: [],

    }
           
            case Type.SET_USER:{
            return{
                ...state,
                user:action.user,
            }

           }

           default:
               return state;
           }
           
           }








    
