import { Fragment } from 'react';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import { AppLayout } from './Layout';
import { App as AntAppWrapper } from 'antd';

function App() {
  // const { message, notification, modal } = AntAppWrapper.useApp();

  // message.success('Good!');
  // notification.info({ message: 'Good' });
  // modal.warning({ title: 'Good' });

  return (
    <Fragment>
      <Notifications />
      <SW />
      <AntAppWrapper>
        <AppLayout>
        <Pages />
        </AppLayout>
        </AntAppWrapper>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
