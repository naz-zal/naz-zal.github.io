import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
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
            icon={<MdDesktopMac />}
            title="Electrical Engineer"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <SkillsItems
            icon={<MdCode />}
            title="Real-time 3D Developer"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <SkillsItems
            icon={<MdPhonelinkSetup />}
            title="Design"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          />
        </div>
      </div>
    </SkillsItemsStyles>
  );
}
