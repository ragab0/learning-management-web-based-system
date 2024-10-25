export function apiLoadingBuilder(builder, asyncCreator, field) {
  builder.addCase(asyncCreator.pending, (state) => {
    state[field].isInitialized = false;
    state[field].loading = true;
    state[field].error = null;
  });
  builder.addCase(asyncCreator.fulfilled, (state, action) => {
    state[field].isInitialized = true;
    state[field].loading = false;
    state[field].apiData = action.payload;
  });
  builder.addCase(asyncCreator.rejected, (state, action) => {
    state[field].isInitialized = true;
    state[field].loading = false;
    state[field].error = action.payload.result;
    // state[field].error =  action.error.message;
  });
}
