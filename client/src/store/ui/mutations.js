export default {
  UI_SET_BUTTON_STATE: (state, { name, buttonState }) => state.buttonsState[name] = buttonState,
}
