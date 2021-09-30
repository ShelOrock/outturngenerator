import React from 'react';
import { useDispatch } from 'react-redux';
import { truncateText, useTypedSelector } from '../../utils';

import { OutturnsTemplate } from '../Templates';

import { GenericComponentProps } from '../../types';
import Grid from '../Organisms/Grid';
import GridCard from '../Organisms/GridCard';
import List from '../Organisms/List';
import { Chip } from '../Atoms';

interface ComponentProps extends GenericComponentProps {};

const OutturnsPage: React.FC<ComponentProps> = () => {

  const dispatch = useDispatch();

  const { allOutturns } = useTypedSelector(state => state);

  return (
    <OutturnsTemplate
      header={ <></> }
      outturns={
        <Grid
          listData={ allOutturns }
          renderData={ outturn => (
            <GridCard
              key={ outturn.id }
              heading={ truncateText(outturn.name, 20) }
              subheading={ truncateText(outturn.name, 50) }
              body={ truncateText(outturn.description, 200) }
              chips={ 
                <List
                  listData={ outturn.casks.slice(0, 3) }
                  renderData={ chip => (
                    <Chip.Chip
                      key={ chip.id }
                      color={ chip.flavourProfile }
                    >{ truncateText(chip.name, 25) }</Chip.Chip>
                  ) }
                />
              }
              primaryAction={{
                dispatch,
                onClick: () => {}, //TODO
                text: 'Heart'
              }}
              secondaryAction={{
                dispatch,
                onClick: () => {},
                text: 'Delete'
              }}
            />
          ) }
        />
      }
    />
  );
};

export default OutturnsPage;
