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
            </DesktopHeader>
        </>
    );
};

const MobileHeader = styled.header`
    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const DesktopHeader = styled(MaxWidthWrapper)`
    display: none;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 72px;
    @media ${QUERIES.laptopAndUp} {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
    }
`;

const LeftActions = styled.div``;
const RightActions = styled.div`
    justify-self: end;
    position: relative;
    display: revert;
`;

const SubscriptionButton = styled(Button)`
    background-color: var(--color-primary);
`;

const Link = styled.a`
    color: var(--color-gray-900);
    text-decoration: underline;
    font-size: 14px;
    font-style: italic;

    // take link out of flow, so button is centered
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: 8px;
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

    @media ${QUERIES.tabletOnly} {
        margin-top: 48px;
        margin-bottom: 72px;
    }
`;

export default Header;
