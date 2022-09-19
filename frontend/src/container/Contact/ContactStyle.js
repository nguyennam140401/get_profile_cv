import styled from 'styled-components'
export const Style = styled.div`
    .contact {
        &__title {
            font-size: var(--big-font-size);
            font-weight: 700;
            color: var(--title-color);
            text-align: center;
            margin: 2rem 0;
        }
        &__container {
            display: block;
            &--location {
                margin-bottom: 1.5rem;

                padding-right: 0;
                margin-right: 0;
                .location__item {
                    display: flex;
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                    .icon {
                        margin-right: 1rem;
                        color: var(--first-color-alt);
                        font-size: 2rem;
                    }
                }
                iframe {
                    width: 100%;
                }
            }
            &--form {
                form {
                    border-radius: 1rem;
                    padding: 1.5rem;
                    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
                    .form__control {
                        margin-bottom: 1.5rem;
                        font-size: 1.3rem;
                        label {
                            display: block;
                            margin-bottom: 0.5rem;
                        }
                        input,
                        textarea {
                            border: 1px solid var(--first-color);
                            outline: none;
                            padding: 0.5rem;
                            font-size: 1.3rem;
                            width: 100%;
                            border-radius: 0.5rem;
                        }
                    }
                }
            }
            @media (min-width: 768px) {
                display: flex;
                &--location {
                    flex: 1;
                    margin-right: 1.5rem;
                }
                &--form {
                    flex: 1;
                }
            }
        }
    }
`
