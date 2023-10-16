import React from 'react'
import AfterLoginLayout from '../../../layout/afterLogin'
import ProfilePageComponent from '../../../components/profile/Index'

const ProfilePage = () => {
  return (
    <AfterLoginLayout>
        <ProfilePageComponent/>
    </AfterLoginLayout>
  )
}

export default ProfilePage