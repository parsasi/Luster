import React from 'react';
import '../styles/edit-profile.css'
import '../styles/my-profile.css'
import '../styles/other-buttons.css'
import MyProfileEditImages from  './MyProfileEditImages'
export default (props) => (
    <div class="edit-profile-page-box">
            <div class="edit-profile-top">
                <div class="profile-name">Alecia</div>
                <div class="white-button-outer finish-button"> 
                    Finish
                </div>
            </div>
            <div class="profile-content">
                <MyProfileEditImages />
                <div class="edit-profile-info">
                    <div class="edit-profile-note">
                        * Information is grey cannot be edited
                    </div> <br/>
                    <div class="profile-info"><b>Age:</b> <span class="info-greyed">24</span></div>
                    <div class="profile-info"><b>Gender:</b> <span class="info-greyed">Female</span></div> 
                    <div class="profile-info"><b>Location:</b> <span class="location">Burnaby <img src="imgs/aim.png"/></span></div>
                    <label class="profile-info" for="looking-for"><b>Looking For:</b></label>
                        <select class="info-drop-down profile-info" name="looking-for">
                            <option value="relationship" selected>Relationship</option>
                            <option value="casual">Casual</option>
                            <option value="marriage">Marriage</option>
                            <option value="Don't Know">Don't Know</option>
                        </select> <br/>
                    <label class="profile-info" for="Exercise Level"><b>Exercise Level:</b></label>
                        <select class="info-drop-down profile-info" name="Exercise Level">
                            <option value="relationship" selected>Active</option>
                            <option value="casual">Sometimes</option>
                            <option value="marriage">Never</option>
                        </select> <br/>
                    <label class="profile-info" for="Alcohol"><b>Alcohol:</b></label>
                        <select class="info-drop-down profile-info" name="Alcohol">
                            <option value="relationship" selected>Socially</option>
                            <option value="casual">Frequently</option>
                            <option value="marriage">Never</option>
                        </select> <br/>
                    <label class="profile-info" for="Sign"><b>Sign:</b></label>
                        <select class="info-drop-down profile-info" name="Sign">
                            <option value="Aquarius">Aquarius</option>
                            <option value="Pieces">Pieces</option>
                            <option value="Aries">Aries</option>
                            <option value="Taurus" selected>Taurus</option>
                            <option value="Gemini">Gemini</option>
                            <option value="Cancer">Cancer</option>
                            <option value="Leo">Leo</option>
                            <option value="Virgo">Virgo</option>
                            <option value="Libra">Libra</option>
                            <option value="Scorpio">Scorpio</option>
                            <option value="Sagittarius">Sagittarius</option>
                            <option value="Capricorn">Capricorn</option>
                        </select> <br/>
                    <label class="profile-info" for="Pets"><b>Pets:</b></label>
                        <select class="info-drop-down profile-info" name="Pets">
                            <option value="relationship" selected>Lots</option>
                            <option value="casual">Dogs</option>
                            <option value="marriage">Cats</option>
                            <option value="Don't Know">Other</option>
                        </select> <br/>
                    <label class="profile-info" for="Cannabis"><b>Cannabis:</b></label>
                        <select class="info-drop-down profile-info" name="Cannabis">
                            <option value="relationship" selected>Socially</option>
                            <option value="casual">Frequently</option>
                            <option value="marriage">Never</option>
                        </select>
                </div>
            </div>
        </div>
)