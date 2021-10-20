const navIsShowing = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_NAV':
            return !state
        default:
            return state
    }
}

export default navIsShowing