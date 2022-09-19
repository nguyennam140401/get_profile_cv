import styled from 'styled-components'
export const Style = styled.div`
    .education {
        &__title {
            font-size: var(--big-font-size);
            text-align: center;
            font-weight: var(--font-semi-bold);
            margin: 4rem 0;
            color: var(--title-color);
        }
        &__data {
            &--item {
                &:nth-child(2n + 1) {
                    justify-items: flex-end;
                }
            }
        }
    }
`
