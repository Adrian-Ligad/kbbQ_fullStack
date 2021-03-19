import { MenuItem, ComboHeader } from './MenuPage.styled'

export default function MenuItems ({ menuItemTitle, content, comboHeader = false}) {
    const isCombo = (comboHeader) => {
        if(comboHeader) {
            console.log(comboHeader)
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