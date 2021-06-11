import {
	Button,
	Row,
	Col,
	Grid,
	GridItem,
	Image,
	Search,
	Swipe,
	SwipeItem,
	Card,
	Tag,
	List,
	TreeSelect,
	SubmitBar,
	Checkbox,
	Cell
} from 'vant'

let vantUIs = [
	Button,
	Row,
	Col,
	Grid,
	GridItem,
	Image,
	Search,
	Swipe,
	SwipeItem,
	Card,
	Tag,
	List,
	TreeSelect,
	SubmitBar,
	Checkbox,
	Cell
]

export default {
	install(Vue) {
		vantUIs.forEach((vantUI) => {
			Vue.use(vantUI)
		})
	}
}
