import { MenuItem, ComboHeader } from './MenuPage.styled'
import { MenuItemType } from '../types.d'

const MenuItems:React.FC<MenuItemType> = ({ menuItemTitle, content, comboHeader}) => {
    const isCombo = (comboHeader:string | undefined) => {
        if(comboHeader) {
            return <><ComboHeader>{ comboHeader }</ComboHeader> { content }</>   
        } else {
            return content;
        }
    }

    return (
        <MenuItem menuItemTitle = {menuItemTitle}>
            {isCombo(comboHeader)}
        </MenuItem>
    )
}

export default MenuItems