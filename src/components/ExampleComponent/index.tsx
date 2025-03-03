import { Flex, Icon, Text } from "@ledgerhq/react-ui";
import styled, { useTheme } from "styled-components";
import { device } from "../../breakpoints";

type ExampleComponentProps = {
  text: string;
  hasBorder?: boolean;
  onClick?: () => void;
};

const Wrapper = styled(Flex)<ExampleComponentProps>`
  gap: 5px;
  padding: 30px 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
  background-color: ${({ theme }) => theme.colors.opacityDefault.c05};
  border-radius: ${({ theme }) => theme.radii[2]}px;
  border: ${({ hasBorder, theme }) =>
    hasBorder ? `1px solid ${theme.colors.opacityPurple.c10}` : "none"};

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const ExampleComponent = (props: ExampleComponentProps) => {
  const { text } = props;
  const { colors } = useTheme();

  return (
    <Wrapper role="banner" {...props}>
      <Text variant="subtitle">{text}</Text>
      <Icon name="ChevronRight" color={colors.neutral.c100} />
    </Wrapper>
  );
};

export default ExampleComponent;
