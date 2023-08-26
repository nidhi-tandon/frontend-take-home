import styled from "@emotion/styled";
import Text from "../../../ui/Text";
import Button from "../../../ui/Button";
import PlusIcon from "../../../icons/PlusIcon";
import { useTheme } from "@emotion/react";
import { MouseEvent } from "react";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
`;

const RightPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Header = ({ count }: { count: number }) => {
  const theme = useTheme();

  const handleCreateTestNet = (event: MouseEvent<HTMLButtonElement>) => {};

  const title = `Testnets (${count})`;

  return (
    <Container>
      <LeftPanel>
        <Text variant="bold">{title}</Text>
        <Button
          variant="text"
          bold="semiBold"
          color={theme.color.blue}
          startIcon={<PlusIcon />}
          handleOnClick={handleCreateTestNet}
        >
          New Testnet
        </Button>
      </LeftPanel>
      <RightPanel></RightPanel>
    </Container>
  );
};

export default Header;
