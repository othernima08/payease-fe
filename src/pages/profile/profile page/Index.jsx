import React from 'react'
import AfterLoginLayout from '../../../layout/afterLogin'
import ProfilePageComponent from '../../../components/profile/Index'
// import NotificationCard from '../../../components/reusable-components/notificationCard'

const ProfilePage = () => {
  return (
    <AfterLoginLayout>
        <ProfilePageComponent/>
        {/* <NotificationCard/> */}
    </AfterLoginLayout>
  )
}

export default ProfilePage