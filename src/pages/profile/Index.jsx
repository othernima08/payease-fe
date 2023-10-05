import React from 'react'
import ProfileComponent from '../../components/profile/Index'
import AfterLoginLayout from '../../layout/afterLogin'

const Profile = () => {
  return (
    <AfterLoginLayout>
        <ProfileComponent/>

    </AfterLoginLayout>
  )
}

export default Profile