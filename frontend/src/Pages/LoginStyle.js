import styled from 'styled-components'
export const Style = styled.div`
    .login {
        /* margin-top: 200px; */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        .title {
            color: var(--title-color);
            text-align: center;
            font-size: var(--big-font-size);
            margin: 2rem 0;
        }
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
`
