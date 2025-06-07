import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

// Define a TS type for the data we'll be using
export interface Post {
  id: string
  asset: any
  amountCoin: any
  amountUSD: any
  duration: any
  entryPrice: any
  buysell: any
}

// Create an initial state value for the reducer, with that type
const initialState: Post[] = [
{ id: '1', asset: 'Bitcoin', amountCoin: 100, amountUSD: "", duration: 3, entryPrice: "", buysell: "Buy"},
]

// Create the slice and pass in the initial state
const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
     // Declare a "case reducer" named `postAdded`.
    // The type of `action.payload` will be a `Post` object.
    marketAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
      },
      prepare(
        asset: any,
        amountCoin: any,
        amountUSD: any,
        duration: any,
        entryPrice: any,
        buysell: any
      ) {
        return {
          payload: { id: nanoid(), asset, amountCoin, amountUSD, duration, entryPrice, buysell}
        }
      }
    },
    // postUpdated(state, action: PayloadAction<Post>) {
    //   const { id, title, content } = action.payload
    //   const existingPost = state.find(post => post.id === id)
    //   if (existingPost) {
    //     existingPost.title = title
    //     existingPost.content = content
    //   }
    // },
    // removePost(state, action: PayloadAction<any>) {
    //   let filterstate = state.filter((actstate: any) => actstate.id !== action.payload.id);
    //   state = filterstate;
    //   toast.error(`${action.payload.title}`, {position: "bottom-left"})
      // const nextCartItems = state.cartItems.filter(
      //   (cartItem : any) => cartItem.id !== action.payload.id
      // );

      // state.cartItems = nextCartItems;
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // toast.error(`${action.payload.title} remove from cart`, {
      //   position: "bottom-left",
      // });

    // }
  }
})

// Export the auto-generated action creator with the same name
export const { marketAdded } = marketSlice.actions

// Export the generated reducer function
export default marketSlice.reducer