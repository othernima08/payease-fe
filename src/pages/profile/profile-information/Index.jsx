import React from 'react'
import ProfileComponent from '../../../components/profile/profileInformation/Index'
import AfterLoginLayout from '../../../layout/afterLogin'

const Profile = () => {
  return (
    <AfterLoginLayout>
        <ProfileComponent/>

    </AfterLoginLayout>
  )
}

export default Profile