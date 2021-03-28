//types
//components
import Description from './DescriptionAbout'
//styles
import { AboutPageWrapper, AboutPageStory, AboutPageStoryContent,AboutPageArrowDown } from './AboutPage.styled'

type Props = {
    scroll: number;
}

const AboutPage:React.FC<Props> = ({ scroll }) => {

    return(
        <AboutPageWrapper>
            <AboutPageStory>
                <AboutPageStoryContent scroll = {scroll}>About</AboutPageStoryContent>
                <AboutPageArrowDown scroll = {scroll}><div>↡</div><div>↡</div></AboutPageArrowDown>
            </AboutPageStory>
            <Description/>
        </AboutPageWrapper>
    )
}

export default AboutPage