import styled from 'styled-components'
export const Style = styled.div`
    @media (min-width: 768px) {
        justify-items: center !important;
    }
    .data {
        padding: 1.5rem 0;
        h3 {
            color: var(--first-color-alt);
        }
        p {
            margin-bottom: 1rem;
        }
        span {
            display: flex;
            /* font-size: 1.5rem; */
            align-items: center;
            svg {
                font-size: 1.4rem;
                color: var(--first-color);
                margin-right: 0.5rem;
            }
        }
    }
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
    .line {
        width: 2px;
        height: 100%;
        background-color: var(--first-color);
        position: relative;
    }
    .line::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: var(--first-color);
        top: 0;
        left: 1px;
        transform: translate(-50%, -50%);
        /* z-index: var(--z-index-tooltip); */

        border-radius: 50%;
    }
`
