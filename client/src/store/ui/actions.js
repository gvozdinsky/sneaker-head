export default {
  setButtonState: (name, state) => ({
    type: 'UI_SET_BUTTON_STATE',
    name,
    buttonState: state
  })
}