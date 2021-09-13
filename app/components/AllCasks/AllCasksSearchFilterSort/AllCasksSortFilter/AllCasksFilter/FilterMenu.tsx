import * as React from 'react';
import { flavourProfiles } from '../../../../../utils';

import FilterMenuManager from '../../../../FilterMenu/FilterMenuManager';

export default ({ filterMenuIsOpen }) => filterMenuIsOpen && <FilterMenuManager filterItems={ flavourProfiles }/>;