import { useState, useReducer } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

import { HeaderSection, ImgLogo, LinkDesc, LinkInnerBox, LogoDesc, NavBottomContainer, NavContainer, SidebarContainer, ToggleSidebarButton } from '.';

function reducerRoutes(state, action) {
    if (action.type === 'current_page') {
        const prev_page = state.findIndex((route) => route.current === true);

        if (prev_page !== -1) {
            state[prev_page].current = false;
        }

        if (action?.newCurrentPageTitle) {
            const current_page = state.findIndex((route) => route.title === action.newCurrentPageTitle);
            state[current_page].current = true;
        }

        return [...state];
    }
}

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/', current: true},
    { title: 'Sales', icon: 'chart-line', path: '/sales', current: false},
    { title: 'Costs', icon: 'chart-column', path: '/costs', current: false},
    { title: 'Payments', icon: 'wallet', path: '/payments', current: false},
    { title: 'Finances', icon: 'chart-pie', path: '/finances', current: false},
    { title: 'Messages', icon: 'envelope', path: '/messages', current: false},
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings', current: false },
    { title: 'Support', icon: 'phone-volume', path: '/support', current: false },
];

const setCurrentNav = (newCurrentPage, setInitial, setCurrent) => {
    setInitial({type: 'current_page'});
    setCurrent(newCurrentPage);
}

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);
    const [themeColor, setThemeColor] = useState(color);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const [route_list, dispatchRoutes] = useReducer(reducerRoutes, routes);
    const [route_bottom_list, dispatchBottomRoutes] = useReducer(reducerRoutes, bottomRoutes);

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const handleRouteClick = (route, type='main',callback) => {
        const newCurrentPage = {type: 'current_page', newCurrentPageTitle: route.title};
        
        if (type === 'bottom') {
            setCurrentNav(newCurrentPage, dispatchRoutes, dispatchBottomRoutes);
        } else if (type === 'main') {
            setCurrentNav(newCurrentPage, dispatchBottomRoutes, dispatchRoutes);
        }

        callback(route.path);
    }

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    const ChangeThemeMode = (e) => {
        e.stopPropagation();
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
                    route_list.map(route => (
                        <LinkInnerBox
                            key={ route.title }
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRouteClick(route, 'main', goToRoute);
                            }}
                            $color={themeColor}
                            $isOpened={isOpened}
                            className={route?.current ? 'active': ''}
                        >
                            <FontAwesomeIcon icon={ route.icon } />
                            <LinkDesc $color={themeColor} $show={isOpened} >{ route.title }</LinkDesc>
                        </LinkInnerBox>
                    ))
                }
            </NavContainer>
            <NavBottomContainer id='bottom'>
                {
                    route_bottom_list.map(route => (
                        <LinkInnerBox
                            key={ route.title }
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRouteClick(route, 'bottom', goToRoute);
                            }}
                            $color={themeColor}
                            $isOpened={isOpened}
                            className={route?.current ? 'active': ''}
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
