import styled from 'styled-components'
export const Style = styled.div`
    .home {
        display: flex;
        padding: 5rem 2rem;
        align-items: center;
        &__img {
            flex: 1;
            overflow: hidden;

            img {
                width: 100%;
                aspect-ratio: 1;
                border-radius: 50%;
            }
        }
        &__content {
            flex: 1;
            padding-left: 1.5rem;
            p {
                font-size: var(--h3-font-size);
            }
            &--title {
                color: var(--title-color);
                font-size: var(--h1-font-size);
            }
            &--job {
                margin: 1.5rem 0;
            }
            &--link {
                margin-top: 1.5rem;
                font-size: var(--h1-font-size);
                a {
                    margin-right: 1.5rem;
                    color: var(--first-color-alt);
                }
            }
        }
        @media (min-width: 768px) {
            &__img {
                flex: 2;
            }
            &__content {
                flex: 3;
                margin-left: 3rem;
            }
        }
    }
`
