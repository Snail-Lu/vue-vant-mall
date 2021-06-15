import { Get } from '@utils/request'
const urls = {
	panelData: '/api/getPanelData'
}
export function getPanelData(data) {
	return Get(urls.getAdminMemoCenterList, data)
}
