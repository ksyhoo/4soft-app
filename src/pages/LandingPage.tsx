import { useEffect, useState } from 'react';
import AppDetails from '../components/AppDetails';
import { App } from '../helpers/types';
import { fetchAppList } from './../helpers/helpers';


//FIXME: udostępnienie możliwości dodania użytkownikowi kolejnej do obserwowania. Dodanie do stanu? dodanie zapyaniado api w stylu /BASE_API_URL/add??? Nie zrozumialem
// Przepraszam za styl ,nie przygotowałem się z żadnym linterem

const LandingPage = () => {
    const [data, setData] = useState<App[]>([])

    useEffect(() => {
        const fetchMyAPI =  async () => {
            const response = await fetchAppList();
            const data = await response.json()
            setData(data)
        }
        fetchMyAPI()
    }, [])

    if (!!data) (<p>loading</p>)

    //FIXME: sorry for inline styles
    return (
    <div style={{display:'flex', flexDirection: 'row', flex: "1 1 0", flexWrap: 'wrap'}}>
        {data.map((app:App) => <AppDetails {...app} />)}
    </div>
    )
}

export default LandingPage
