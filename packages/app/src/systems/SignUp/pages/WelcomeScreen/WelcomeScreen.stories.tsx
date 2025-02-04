import type { Story } from '@storybook/react';

import { WelcomeScreen } from './WelcomeScreen';

export default {
  component: WelcomeScreen,
  title: 'SignUp/Pages/1. WelcomeScreen',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage: Story<unknown> = () => <WelcomeScreen />;
