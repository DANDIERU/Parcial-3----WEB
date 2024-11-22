import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const poemsSlice = createSlice({
    name: POEMS_SLICE,
    initialState: {
        ...DEFAULT_POEMS
    },
    reducers: {
        updatePoems: (store, action: PayloadAction<Array<Poem>>) => {
            store.allPoems = action.payload
        },
        updateDetailPoem: (store, action: PayloadAction<Poem>) => {
            store.detailPoemm = action.payload
        }
    }
})

export const { updateAllPoems, updateDetailPoem } = poemsSlice.actions