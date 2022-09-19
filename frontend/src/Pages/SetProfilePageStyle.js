import styled from "styled-components";
export const Style = styled.div`
	input {
		margin-top: 0.75rem;
	}
	.set-profile {
		.title {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			font-size: var(--big-font-size);
			h1 {
				color: var(--title-color);
				text-align: center;
			}
			svg {
				position: absolute;
				top: 50%;
				left: 2rem;
				transform: translateY(-50%);
				cursor: pointer;
				color: var(--first-color);
			}
		}
		form {
			border-radius: 1rem;
			padding: 1.5rem;
			box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
			.form__control {
				margin-bottom: 1.5rem;
				font-size: 1.3rem;
				position: relative;
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
				svg {
					position: absolute;
					left: 100%;
					top: 0;
					transform: translate(-50%, -50%);
					color: red !important;
					font-size: 2rem !important;
				}
			}
			.form__education {
				display: grid;
				position: relative;
				gap: 1.5rem;
				grid-template-columns: repeat(4, 23%);
				svg {
					position: absolute;
					bottom: 1rem;
					right: 1rem;
					font-size: 3rem;
					color: var(--first-color);
					cursor: pointer;
				}
				.form__control--detail {
					/* position: relative; */
					/* svg {
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 2rem;
                    } */
				}
				span {
					background-color: var(--first-color-alt);
					color: #fff;
					padding: 0.1rem 0.5rem;
					margin: 0.25rem 0.25rem 0.25rem 0;
					display: inline-block;
				}
			}
		}
	}
`;
