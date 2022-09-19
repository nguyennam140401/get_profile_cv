import styled from 'styled-components'
export const Style = styled.div`
    .project {
        &__title {
            font-size: var(--big-font-size);
            text-align: center;
            margin: 4rem 0;
            color: var(--title-color);
            font-weight: var(--font-semi-bold);
        }
        &__container {
            justify-items: center;
            display: grid;
            grid-template-columns: repeat(2, 50%);
            gap: 1.5rem;
            &--item {
                cursor: pointer;

                .item__img {
                    height: 230px;
                    width: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 1rem;
                        box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
                    }
                }
                .item__title {
                    margin-top: 1rem;
                    color: var(--first-color);
                    /* font-weight: ; */
                }
                .item__infor {
                    display: none;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.1);
                    top: 0;
                    left: 0;
                    z-index: var(--z-modal);
                    justify-content: center;
                    align-items: center;
                    cursor: auto;
                    .contain {
                        width: 70%;
                        /* padding: 2rem; */
                        height: 60%;
                        min-height: 400px;
                        background-color: #fff;
                        z-index: 10000;
                        overflow-y: auto;
                        margin-bottom: 100px;
                        padding: 3rem;
                        border-radius: 2rem;
                        box-shadow: 2px 4px 10px 6px rgba(0, 0, 0, 0.2);
                        &__infor--title {
                            font-size: var(--h1-font-size);
                            font-weight: var(--font-semi-bold);
                            color: var(--title-color);
                        }
                        &__infor--tech {
                            .tech__item {
                                h3 {
                                    margin: 1rem 0;
                                    color: var(--first-color);
                                }
                            }
                            .tool {
                                margin-left: 1.5rem;
                            }
                        }
                        button {
                            padding: 0.5rem;
                            display: inline-block;
                        }
                    }
                }
                &.active {
                    .item__infor {
                        display: flex;
                    }
                }
            }
            @media (min-width: 768px) {
                grid-template-columns: repeat(3, 33%);

                .contain {
                    margin: 0 !important;
                }
            }
        }
    }
`
