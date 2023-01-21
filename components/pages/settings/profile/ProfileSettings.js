import { Breadcrumbs, Item } from 'react-basics';
import { defineMessages, useIntl } from 'react-intl';
import Page from 'components/layout/Page';
import PageHeader from 'components/layout/PageHeader';
import ProfileDetails from './ProfileDetails';
import ChangePasswordButton from './ChangePasswordButton';

const messages = defineMessages({
  profile: { id: 'label.profile', defaultMessage: 'Profile' },
});

export default function ProfileSettings() {
  const { formatMessage } = useIntl();

  return (
    <Page>
      <PageHeader>
        <Breadcrumbs>
          <Item>{formatMessage(messages.profile)}</Item>
        </Breadcrumbs>
        <ChangePasswordButton />
      </PageHeader>
      <ProfileDetails />
    </Page>
  );
}