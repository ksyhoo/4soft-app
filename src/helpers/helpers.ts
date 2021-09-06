import { API_BASE_URL } from './constants';

export const fetchAppList = () => fetch(`${API_BASE_URL}/list`)

export const fetchAppDetails = (id: number) => fetch(`${API_BASE_URL}/details/${id}`)
