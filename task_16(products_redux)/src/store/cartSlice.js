import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addtoCart: (state, action) => {
            const item = state.cart.find(p => p.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
    }
})