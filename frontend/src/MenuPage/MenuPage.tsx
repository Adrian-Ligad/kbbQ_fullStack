import { MenuContainer, MenuHeader, MenuContent, MenuRow, MenuBox, MenuBoxAlt, MenuPicture, ComboHeader, MenuPictureParallax } from './MenuPage.styled'
//types
import { MenuItemType } from '../types.d'
//For menu items containers
import { menuItems1, menuItems2, menuItems3, menuItems4, menuItems5 } from './menuItems'

import MenuItems from './MenuItem'

//Pictures to be used for picture box
import kbbq1 from '../pictures/kbbq1.jpg'
import kbbq2 from '../pictures/kbbq2.jpg'
import kbbq3 from '../pictures/kbbq3.jpg'
import kbbq4 from '../pictures/kbbq4.jpg'
import kbbq5 from '../pictures/kbbq5.jpg'

const MenuPage:React.FC = () => {
    return (
        <MenuContainer>
            <MenuHeader>
                Menu
            </MenuHeader>
            <MenuContent>
                <MenuRow>
                    <MenuBox>
                        {menuItems1.map(( item:MenuItemType ) => <MenuItems menuItemTitle = {item.menuItemTitle} content = {item.content}/>)}
                    </MenuBox>
                    <MenuPicture menuPic = {kbbq1}></MenuPicture>
                </MenuRow>
                <MenuRow>
                    <MenuPicture> <MenuPictureParallax menuPic = {kbbq2}/> </MenuPicture>
                    <MenuBoxAlt>
                        {menuItems2.map(( item:MenuItemType ) => <MenuItems comboHeader = {item.comboHeader} content = {item.content}/>)}
                    </MenuBoxAlt>
                </MenuRow>
                <MenuRow>
                    <MenuBox>
                        {menuItems3.map(( item:MenuItemType ) => <MenuItems content = {item.content}/>)}
                    </MenuBox>
                    <MenuPicture menuPic = {kbbq3}> </MenuPicture>
                </MenuRow>
                <MenuRow>
                <MenuPicture>
                        <MenuPictureParallax menuPic = {kbbq4}/> </MenuPicture>
                    <MenuBoxAlt>
                        {menuItems4.map(( item:MenuItemType ) => <MenuItems content = {item.content}/>)}
                    </MenuBoxAlt>
                </MenuRow>
                <MenuRow>
                    <MenuBox>
                        {menuItems5.map(( item:MenuItemType ) => <MenuItems content = {item.content}/>)}
                    </MenuBox>
                    <MenuPicture menuPic = {kbbq5}> </MenuPicture>
                </MenuRow>
            </MenuContent>
        </MenuContainer>
    )
}
export default MenuPage