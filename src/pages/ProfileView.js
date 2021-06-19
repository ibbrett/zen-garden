import React, { useContext } from 'react';
import { Context } from '../store/store';
import Header from '../components/Header';

export default function ProfileView() {

  // get state vars
  const [ state ] = useContext(Context);
  const title = 'Profile';
  const userFirstName = state.profile.firstName;
  const userLastName = state.profile.lastName;
  const userAvatar = state.profile.avatarImage;
  const phone = state.profile.phone;
  const email = state.profile.email;
  const bio = state.profile.bio;

  return (
    <div className="container">
      <Header pageName="profile" />
      <div class='content content-profile'>
        <h1 class='label'>{title}</h1>
        <div class='wrapper-wrapper'>
          <div class='wrapper'>
            <div class='profile-image'><img src={userAvatar} /></div>
            <div class='profile-grid-container'>
            <div class="grid-container">
              <div class="grid-item">First name</div>
              <div class="grid-item">{userFirstName}</div>
              <div class="grid-item">Last name</div>
              <div class="grid-item">{userLastName}</div>
              <div class="grid-item">Phone</div>
              <div class="grid-item">{phone}</div>
              <div class="grid-item">Email</div>
              <div class="grid-item">{email}</div>
              <div class="grid-item">Bio</div>
              <div class="grid-item bio">
                <div class='grid-item-block'>
                {bio}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
