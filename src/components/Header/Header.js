import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
    return (
        <>
            <MobileHeader>
                <SuperHeader>
                    <Row>
                        <ActionGroup>
                            <button>
                                <Search size={24} />
                            </button>
                            <button>
                                <Menu size={24} />
                            </button>
                        </ActionGroup>
                        <ActionGroup>
                            <button>
                                <User size={24} />
                            </button>
                        </ActionGroup>
                    </Row>
                </SuperHeader>
                <MainHeader>
                    <Logo />
                </MainHeader>
            </MobileHeader>
            <DesktopHeader>
                <Row>
                    <LeftActions>
                        <ActionGroup>
                            <button>
                                <Search size={24} />
                            </button>
                            <button>
                                <Menu size={24} />
                            </button>
                        </ActionGroup>
                    </LeftActions>
                    <Logo />
                    <RightActions>
                        <SubscriptionButton>SUBSCRIBE</SubscriptionButton>
                        <Link>Already a subscriber?</Link>
                    </RightActions>
                </Row>
            </DesktopHeader>
        </>
    );
};

const MobileHeader = styled.header`
    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const DesktopHeader = styled.header`
    display: none;
    margin-bottom: 16px;
    @media ${QUERIES.laptopAndUp} {
        display: block;
    }
`;

const LeftActions = styled.div``;
const RightActions = styled.div`
    align-self: end;
`;

const SubscriptionButton = styled(Button)`
    background-color: var(--color-primary);
    margin-bottom: 8px;
`;

const Link = styled.a`
    color: var(--color-gray-900);
    text-decoration: underline;
`;

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;
`;

export default Header;
