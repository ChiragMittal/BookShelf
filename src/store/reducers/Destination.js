import * as ACTION from '../../constants'

const initialState = {
	cartVisible: false,
	destinations: [],
	favorites: [],
	index: 0,
	id: 0,
	name: '',
	query: '',
	suggestion: [],
	map: []
}

export default function Destination(state = initialState, action) {
	switch (action.type) {
		case ACTION.RECEIVE_DATA:
			return Object.assign({}, state, {
				destinations: action.payload.destination
			})
		case ACTION.SELECT_PRODUCT:
			return Object.assign({}, state, {
				index: action.payload.index
			})
		case ACTION.CART_ADD:
			console.log('cart add')
			return Object.assign({}, state, {
				favorites: [...state.favorites,{
					id: action.payload.id,
					name: action.payload.name
				}]
			})
		case ACTION.CART_REMOVE:
			let fav = state.favorites
			fav.splice(action.payload.idx,1)
			return Object.assign({}, state, {
				favorites: fav
				})
		case ACTION.CART_VISIBLE:
			console.log("cart visible")
			return Object.assign({}, state, {
				cartVisible: action.payload.cartVisible
			})
		case ACTION.CART_DESTINATIONHOT_SEARCH:
			return Object.assign({}, state, {
				query: action.payload.query
			})
		case ACTION.DESTINATIONHOT_SEARCHFETCH:
			return Object.assign({}, state, {
				suggestion: action.payload.suggestion
			})
		case ACTION.RECEIVEMAP_DATA:
			console.log('map data')
			return Object.assign({}, state, {
				map: action.payload.map
			})

		default:
			return state
	}
}
