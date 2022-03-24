import * as React from 'react';
import { Container, Cycle } from './styles';

interface CyclesProps {
  cycle: number;
}

const Cycles: React.FC<CyclesProps> = ({ cycle }) => {
  return (
    <Container>
      <Cycle theme={{filled: cycle >= 1}}/>
      <Cycle theme={{filled: cycle >= 2}}/>
      <Cycle theme={{filled: cycle >= 3}}/>
      <Cycle theme={{filled: cycle >= 4}}/>
    </Container>
  );
}

export default Cycles;