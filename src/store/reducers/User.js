import * as ACTION from '../../constants'

const initialState = {
    img: '',
    info: {},
    post: []
}

export default function User(state = initialState, action) {
    switch (action.type) {
        case ACTION.ADD_PHOTO:
            return Object.assign({}, state, {
                img: action.payload.img
            })
        case ACTION.DEL_PHOTO:
            return Object.assign({}, state, {
                img: ''
            })
        case ACTION.EDIT_INFO:
            return Object.assign({}, state, {
                info: action.payload.info
            })
        case ACTION.RECIEVE_INFO:
            return Object.assign({}, state, {
                info: action.payload.info,
                img: action.payload.info.picPath
            })
        case ACTION.LOAD_POST:
            return Object.assign({}, state, {
                post: action.payload.post
            })


        default:
            return state
    }
}
