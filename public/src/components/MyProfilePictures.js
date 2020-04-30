import React from 'react';
import MyProfilePicture from './MyProfilePicture'

export default () => (
    <div class="all-profile-images">
        <MyProfilePicture isMain={true} url="./imgs/testimgs/aleciaprof.jpg"/>
        <MyProfilePicture isMain={false} url="./imgs/testimgs/alecia2.jpg"/>
        <MyProfilePicture isMain={false} url="./imgs/testimgs/alecia3.jpg"/>
        <MyProfilePicture isMain={false} url="./imgs/testimgs/alecia4.jpg"/>
        <MyProfilePicture isMain={false} url="./imgs/testimgs/alecia5.jpg"/>
    </div>
)


