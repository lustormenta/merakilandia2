import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import ThemeContext from '../../context/ThemeContext'

export default function ItemDetailPage() {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={theme ? 'theme-dark' : 'theme-light'}>
            <ItemDetailContainer />
        </div>
    )
}