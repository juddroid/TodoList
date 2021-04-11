import React from 'react';
import TaskCardCount from '../taskCardCount/taskCardCount';
import Icon from '../icon/icon';
import styled from 'styled-components';

const ColumnHeader = ({ title, list }) => {
  return (
    <ColumnHeaderContainer>
      <ColumnTitleBox>
        <ColumnTitle>{title}</ColumnTitle>
        <TaskCardCount list={list} />
      </ColumnTitleBox>
      <ColumnButtonBox>
        <Icon type="add" />
        <Icon type="delete" />
      </ColumnButtonBox>
    </ColumnHeaderContainer>
  );
};

export default ColumnHeader;

const ColumnHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

const ColumnTitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const ColumnTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  margin-right: 10px;
`;

const ColumnButtonBox = styled.div`
  display: flex;
`;
