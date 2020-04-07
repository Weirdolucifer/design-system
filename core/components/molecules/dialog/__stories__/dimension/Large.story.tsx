import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Dialog from '../../Dialog';
import { docPage } from '@/utils/docPage';
import { updateKnob } from '@/utils/storybookEventEmitter';

export const large = () => {
  const open = boolean('open', true);

  const onClose = () => {
    updateKnob('open', false);
  };

  const options = {
    open,
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    primaryButtonCallback: action('primary click'),
    secondaryButtonLabel: 'Basic',
    secondaryButtonCallback: action('basic click')
  };

  return (
    <Dialog dimension="large" {...options} />
  );
};

export default {
  title: 'Molecules|Dialog/Dimension',
  component: Dialog,
  parameters: {
    docs: {
      page: () => docPage({ title: 'Dialog' })
    }
  }
};
