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

        const itemId = action.payload.item;

        console.log(itemId);

        const updateOrder = state.order.filter(orderItem => orderItem.id !== itemId);

        return {
            ...state,
            order: updateOrder
        }
    }

    if(action.type === "place-order"){

        return {
            ...state,
            order: [],
            tip: 0
        }
    }

    if(action.type === 'add-tip'){

        const tip = action.payload.value;

        return {
            ...state,
            tip
        }
    }

    return state
}