const reducer = (state = {product_cart: [] }, action) => {
    switch (action.type) {
        // LOGIN
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                 ...state,
                user: undefined
            }
        case 'PRODUCTSALL':
            return {
                ...state,
                products: action.payload
            }
        case 'PRODUCTSRECENTLY':
            return {
                ...state,
                productsRec: action.payload
            }
        case 'ADD_CART':
            return {
               ...state,
               product_cart: [...state.product_cart, action.payload]
            }
            case 'EMPTY_CART':
         return {
            ...state,
             product_cart: []
            }
         case 'REMOVE_ONE_PRODUCT':
           return {
             ...state,
             cart: action.payload
           }
            case "ADD_CANT_CART":
                return {
                    ...state,
                    product_cart:  state.product_cart.map((article) =>                   
                article._id === action.payload
                ?  {...article, unit: article.unit + 1}
                 :article,
                ),
              };
              case "SUB_CANT_CART":
                return {
                    ...state,
                    product_cart:  state.product_cart.map((article) =>                   
                    
                article._id === action.payload
                ?  {...article, unit: article.unit - 1}
                 :article,
                ),
              };
            case 'BUY':
                return {
                    ...state,
                    compra: action.payload
                }
        default:
            return state;
    }
    
};

export default reducer;

