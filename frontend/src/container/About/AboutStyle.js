import styled from "styled-components";
export const Style = styled.div`
	.about {
		&__title {
			font-size: var(--big-font-size);
			font-weight: 700;
			color: var(--title-color);
			text-align: center;
			margin-bottom: 2rem;
		}
		&__container {
			&--img {
				flex: 1;
				margin-right: 1rem;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
				}
			}
			&--infor {
				margin-top: 2rem;
				flex: 1;
				h2 {
					color: var(--first-color-alt);
					margin-bottom: 1rem;
				}
				.infor-item {
					font-size: var(--h3-font-size);
					margin-bottom: 1.25rem;
					span {
						color: var(--first-color-alt);
						svg {
							color: var(--title-color);
							font-weight: bolder;
						}
					}
				}
			}
		}
		@media (min-width: 768px) {
			&__container {
				display: flex;
				&--infor {
					margin-left: 2rem;
					margin-top: 0;
					.infor-item {
						margin-bottom: 1.5rem;
					}
				}
			}
		}
	}
`;
