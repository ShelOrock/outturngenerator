import React from 'react';
import { useDispatch } from 'react-redux';
import { truncateText, useTypedSelector } from '../../utils';

import { OutturnsTemplate } from '../Templates';

import { GenericComponentProps } from '../../types';
import Grid from '../Organisms/Grid';
import GridCard from '../Organisms/GridCard';
import List from '../Organisms/List';
import { Chip, Link } from '../Atoms';
import Modal from '../Organisms/Modal';

interface ComponentProps extends GenericComponentProps {};

const OutturnsPage: React.FC<ComponentProps> = () => {

  const dispatch = useDispatch();

  const { allOutturns } = useTypedSelector(state => state);

  return (
    <OutturnsTemplate
      header={ <></> } //header
      outturns={
        <Grid
          listData={ allOutturns }
          renderData={ outturn => (
            <Link.NavigationLink
              key={ outturn.id }
              to={ `/outturn/${ outturn.id }`}
              >
            <GridCard
              heading={ truncateText(outturn.name, 12) }
              subheading={ truncateText(outturn.name, 16) }
              body={ truncateText(outturn.description, 100) }
              chips={ 
                <List
                  listData={ outturn.casks.slice(0, 4) }
                  renderData={ chip => (
                    <Chip.Chip
                      key={ chip.id }
                      color={ chip.flavourProfile }
                      text={ `${ chip.caskNumber } ${ chip.name }` }
                    />
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
            </Link.NavigationLink>
          ) }
        />
      } //outturns
    />
  );
};

export default OutturnsPage;
