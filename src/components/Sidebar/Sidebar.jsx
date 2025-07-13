import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

import { HeaderSection, ImgLogo, LinkDesc, LinkInnerBox, LogoDesc, NavBottomContainer, NavContainer, SidebarContainer, ToggleSidebarButton } from '.';


const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales', active: true}, // react-router current active page
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);
    const [themeColor, setThemeColor] = useState(color);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    const ChangeThemeMode = () => {
        themeColor === 'light' ? setThemeColor('dark') : setThemeColor('light');
    }

    return (
        <SidebarContainer className={ containerClassnames } $color={themeColor} $isOpened={isOpened}>
            <HeaderSection>
                <ImgLogo src={ logo } alt="TensorFlow logo"/>
                <LogoDesc $color={themeColor} $show={isOpened}>TensorFlow</LogoDesc>
                <ToggleSidebarButton $color={themeColor} onClick={ toggleSidebar } $isOpened={isOpened}>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                </ToggleSidebarButton>
            </HeaderSection>
            <NavContainer id='main'>
                {
                    routes.map(route => (
                        <LinkInnerBox
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                            $color={themeColor}
                            $isOpened={isOpened}
                            className={route?.active ? 'active': ''}
                        >
                            <FontAwesomeIcon icon={ route.icon } />
                            <LinkDesc $color={themeColor} $show={isOpened} >{ route.title }</LinkDesc>
                        </LinkInnerBox>
                    ))
                }
            </NavContainer>
            <NavBottomContainer id='bottom'>
                {
                    bottomRoutes.map(route => (
                        <LinkInnerBox
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                            $color={themeColor}
                            $isOpened={isOpened}
                        >
                            <FontAwesomeIcon icon={ route.icon } />
                            <LinkDesc $color={themeColor} $show={isOpened}>{ route.title }</LinkDesc>
                        </LinkInnerBox>
                    ))
                }
                <LinkInnerBox
                    id='theme-toggle'
                    $color={themeColor}
                    $isOpened={isOpened}
                    onClick={ChangeThemeMode}
                >
                    <FontAwesomeIcon icon={ themeColor == 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun' } />
                    <LinkDesc $color={themeColor} $show={isOpened}>{ themeColor === 'light' ? 'Dark Theme': 'Light Theme' }</LinkDesc>
                </LinkInnerBox>
            </NavBottomContainer>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
