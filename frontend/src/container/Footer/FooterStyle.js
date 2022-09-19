import styled from 'styled-components'
export const Style = styled.div`
    width: 100%;
    .footer {
        margin-top: 3rem;
        text-align: center;
        background-color: var(--first-color-light);
        padding: 2rem 0;
        font-size: var(--h3-font-size);
        font-weight: var(--font-semi-bold);
        position: relative;
        &_option {
            position: absolute;
            right: 1.5rem;
            top: 50%;
            display: flex;
            transform: translateY(-50%);
            cursor: pointer;
            color: var(--first-color);
        }
    }
    margin-bottom: 157px;
    @media (min-width: 768px) {
        margin: 0;
    }
`
