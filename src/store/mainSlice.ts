import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { navbarArray } from "../components/navbar/NavbarArray";


interface Button {
    icon: string;
    text: string;
    active: boolean;
    id: number;
}

interface MainState {
    buttons: Button[];
}


const initialState: MainState = {
    buttons: navbarArray,
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setActiveButton: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            state.buttons = state.buttons.map(button =>
                button.id === id ? { ...button, active: true } : { ...button, active: false })
        }
    }
})

export const { setActiveButton } = mainSlice.actions;
export const selectButtons = (state: { main: MainState }) => state.main.buttons;

export default mainSlice.reducer;