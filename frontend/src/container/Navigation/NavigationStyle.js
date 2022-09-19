import styled from 'styled-components'
export const Style = styled.div`
    width: 100%;
    .nav {
        position: fixed;
        background-color: #fff;
        box-shadow: 0 0 20px var(--first-color-light);
        width: 100%;
        bottom: 0;
        margin: 0;
        left: 0;
        z-index: var(--z-modal);
        padding: 20px 0;
        border-radius: 1rem;
        &_list {
            ul {
                display: grid;

                grid-template-columns: repeat(3, 33%);
                justify-content: flex-end;
                list-style-type: none;

                z-index: var(--z-modal);
                height: var(--header-height);

                li {
                    text-align: center;
                    a {
                        color: var(--first-color-second);
                        font-size: var(--h1-font-size);
                        text-decoration: none;
                    }
                    a.active {
                        color: var(--first-color-alt);
                    }
                    &:hover a {
                        color: var(--first-color-alt);
                    }
                }
            }
        }
        @media (min-width: 768px) {
            top: 0;
            height: max-content;
            /* width: 100%; */
            .nav {
                &_list {
                    ul {
                        display: flex;
                        width: 100%;
                        li {
                            padding: 0 20px;
                            a {
                                font-size: var(--h2-font-size);
                            }
                        }
                    }
                }
            }
        }
    }
`
