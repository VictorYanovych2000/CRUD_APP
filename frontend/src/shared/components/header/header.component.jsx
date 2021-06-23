import React, {useContext} from 'react';
import {Header, HeaderContent, Avatar} from './header.styles';
import {AuthContext} from '../../context/auth.context';
import {StyledLink} from "./header.styles";
import SvgDashboard from "../svg/svg-dashboard";
import SvgProfile from "../svg/Svg.-profile";
import SvgUsers from "../svg/svg-users";

const Header = () => {
    const auth = useContext(AuthContext);

    return (
        <Header>
            <div className={'container'}>
                <HeaderContent>
                    <Avatar role={auth.role}>
                        <div>
                            <img
                                src={
                                    'https://robohash.org/bbaeff09cd6b0101d3c81dc436bc238f?set=set3&bgset=&size=200x200'
                                }
                                alt={'Avatar'}
                            />
                        </div>
                        <span>{auth.email}</span>
                    </Avatar>
                    <nav>
                        <ul>
                            <li>
                                <div><StyledLink
                                    to={`/profiles/user/${auth.userId}`}>Profiles <SvgProfile/></StyledLink></div>
                            </li>
                            <li>
                                <StyledLink to={'/'}>
                                    Dashboard
                                    <SvgDashboard/>
                                </StyledLink>
                            </li>
                            {auth.role === 'admin' && (
                                <li>
                                    <StyledLink to={'/users'}>Users<SvgUsers/></StyledLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <div onClick={() => auth.logout()}>Logout</div>
                </HeaderContent>
            </div>
        </Header>
    );
};

export default Header;
