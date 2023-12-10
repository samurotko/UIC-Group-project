import styled from "styled-components";
import { palette, typography } from "../theme";

export const ButtonLink = styled.a`
background-color: ${palette.button.primary};
cursor: pointer;
border: none;
border-radius: 10px;
padding: 10px 18px;
text-align: center;
font-size: ${typography.body.fontSize};
font-weight: ${typography.body.fontWeight};
color: ${palette.button.secondary};
text-decoration: none;
`;