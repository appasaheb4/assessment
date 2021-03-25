import React from 'react';
import * as Config from '@at/config';
import WrappedView from './WrappedView';
import Icon from '../atoms/Icon';
import CircleButton from '../atoms/CircleButton';
import * as Models from '../../models';

interface TabBarProps {
  tabs?: Array<string>;
  onChange?: () => void;
  value?: string;
}

const Tabbar: React.FunctionComponent<TabBarProps> = props => (
  <>
    <WrappedView
      align="center"
      justify="space-around"
      size={Models.Component.ElementSize.Block}
      minHeight={40}
      stack={Models.Component.StackDirection.Horizontal}>
      <Icon icon="home-fill" size={24} color={Config.Styles.COLORS.BLACK} />
      <CircleButton
        background={Config.Styles.COLORS.WHITE}
        elevation={2}
        marginTop={-40}
        size={48}>
        <Icon
          icon="ri-add-line"
          size={24}
          color={Config.Styles.COLORS.SECONDARY}
        />
      </CircleButton>

      <Icon
        icon="ri-information-line"
        size={24}
        color={Config.Styles.COLORS.BLACK}
      />
    </WrappedView>
  </>
);

export default Tabbar;
