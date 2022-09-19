import styled from 'styled-components'
export const Style = styled.div`
    .skill {
        &__title {
            font-size: var(--big-font-size);
            text-align: center;
            margin: 4rem 0;
            color: var(--title-color);
            font-weight: var(--font-semi-bold);
        }
        &__container {
            /* justify-items: center; */
            display: grid;
            grid-template-columns: repeat(2, 50%);
            gap: 1.5rem;
            &--item {
                display: flex;
                cursor: pointer;

                svg {
                    font-size: 2rem;
                }
                .icon {
                    font-size: 2.5rem;
                    margin-right: 1rem;
                    color: var(--first-color-alt);
                }
                .option {
                    svg {
                        transition: 0.4s;
                        transform: rotate(0);
                        transform-origin: center center;
                    }
                }
                .infor {
                    &__detail {
                        height: 0px;
                        overflow: hidden;
                        transition: 0.4s linear;
                        &--item {
                            color: var(--first-color);
                            font-weight: var(--font-semi-bold);
                            padding-top: 20px;
                        }
                    }
                }
                &.active {
                    .infor {
                        &__detail {
                            height: 100%;
                        }
                    }
                    .option {
                        svg {
                            transform: rotate(180deg);
                        }
                    }
                }
            }
            @media (min-width: 768px) {
                grid-template-columns: repeat(3, 33%);
            }
        }
    }
`
