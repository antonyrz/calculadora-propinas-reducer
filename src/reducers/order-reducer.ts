import { MenuItem, OrderItem } from "../types";

export type OrderActions = 
    {type: 'add-item', payload: {item : MenuItem}} |
    {type: 'remove-item', payload: {item: MenuItem['id']}} |
    {type: 'place-order'} |
    {type: 'add-tip', payload: {value: number}}


export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {

    if(action.type === 'add-item'){

        const item = action.payload.item;
        let updatedOrder : OrderItem[] = [];

        const itemExist = state.order.find(orderItem => orderItem.id === item.id)

        if(itemExist) {
            updatedOrder = state.order.map( orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1 } : 
                orderItem
            )
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            updatedOrder = [... state.order, newItem];
        }


        return {
            ...state,
            order: updatedOrder
        }
    }

    if(action.type === 'remove-item'){



        return {
            ...state
        }
    }

    if(action.type === "place-order"){



        return {
            ...state
        }
    }

    if(action.type === 'add-tip'){



        return {
            ...state
        }
    }

    return state
}