import React from 'react';
import MyProfilePicture from './MyProfilePicture'

export default () => (
    <div class="all-profile-images">
        <MyProfilePicture isMain={true} url="./imgs/avatar.png"/>
        <MyProfilePicture isMain={false} url="./imgs/avatar.png"/>
        <MyProfilePicture isMain={false} url="./imgs/avatar.png"/>
        <MyProfilePicture isMain={false} url="./imgs/avatar.png"/>
        <MyProfilePicture isMain={false} url="./imgs/avatar.png"/>
    </div>
)


