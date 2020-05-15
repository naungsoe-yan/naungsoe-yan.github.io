<template>
  <cv-header aria-label="Carbon header">
    <cv-skip-to-content href="#main-content">
      Skip to content
    </cv-skip-to-content>
    <cv-header-name href="javascript:void(0)" prefix="IBM">
      [Platform]
    </cv-header-name>
    <template slot="header-global">
      <cv-header-global-action
        aria-label="Notifications"
        aria-controls="notifications-panel"
      >
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action 
        aria-label="User avatar" 
        aria-controls="user-panel"
      >
        <UserAvatar20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-label="App switcher"
        aria-controls="switcher-panel"
      >
        <AppSwitcher20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';

export default {
  name: 'AppHeader',
  components: {
    Notification20,
    UserAvatar20,
    AppSwitcher20
  }
}
</script>

<style>
</style>
