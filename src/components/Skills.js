import React from 'react';
import { BiCode } from 'react-icons/bi';
import {GiElectricalResistance} from 'react-icons/gi';
import { BiPencil } from 'react-icons/bi'; 
import styled from 'styled-components';
import SkillsItems from './SkillsItems';

const SkillsItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Skills() {
  return (
    <SkillsItemsStyles>
      <div className="container">
        <div className="services__allItems">
          <SkillsItems
            icon={<GiElectricalResistance />}
            title="Electrical Engineer"
            desc="With a focus on embedded systems, I enjoy programming microprocessors and controllers."
          />
          <SkillsItems
            icon={<BiCode />}
            title="Real-time 3D Developer"
            desc="Creating interactive 3D experiences through software, design, and spatial audio."
          />
          <SkillsItems
            icon={<BiPencil />}
            title="Writing"
            desc="As one of my favourite creative outlets, I enjoy writing anything from stories to think-pieces."
          />
        </div>
      </div>
    </SkillsItemsStyles>
  );
}
