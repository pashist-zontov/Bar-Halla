import React from "react";
import x1 from "./1.png";
import VKCircled from "./VK-circled.png";
import discord from "./discord.png";
import done from "./done.png";
import gear from "./gear.png";
import glowingStar from "./glowing-star.png";
import info from "./info.png";
import line1 from "./line-1.svg";
import line7 from "./line-7.svg";
import logout from "./logout.png";
import plus from "./plus.png";
import "./style.css";
import telegram from "./telegram.png";
import untitled110202411270126302 from "./untitled110-20241127012630-2.png";
import vector from "./vector.svg";

export const ProfilePrototype = () => {
  return (
    <div className="profile-prototype">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />

            <div className="made-by-team">
              Made by
              <br />
              Team “SiSiStick”
            </div>

            <img className="vector" alt="Vector" src={vector} />

            <div className="username">&lt;Username&gt;</div>

            <div className="div" />

            <div className="text-wrapper">Status:</div>

            <div className="view">
              <div className="overlap-group-2">
                <div className="rectangle-2" />

                <img className="telegram" alt="Telegram" src={telegram} />

                <img className="VK-circled" alt="Vk circled" src={VKCircled} />

                <img className="discord" alt="Discord" src={discord} />

                <img className="line" alt="Line" src={line1} />

                <div className="text-wrapper-2">8 (800) 555-35-35</div>

                <div className="text-wrapper-3">Contact us:</div>

                <div className="text-wrapper-4">teamsisistick@gmail.com</div>

                <img
                  className="untitled"
                  alt="Untitled"
                  src={untitled110202411270126302}
                />

                <div className="text-wrapper-5">© 2025 Bar-Halla</div>
              </div>
            </div>

            <div className="balance">
              <div className="overlap-2">
                <img className="element" alt="Element" src={x1} />

                <div className="text-wrapper-6">0</div>
              </div>
            </div>

            <div className="button-info">
              <div className="overlap-3">
                <div className="rectangle-3" />

                <div className="text-wrapper-7">Info</div>

                <img className="info" alt="Info" src={info} />
              </div>
            </div>

            <div className="button-my-profile">
              <div className="overlap-4">
                <div className="rectangle-4" />

                <div className="text-wrapper-8">Settings</div>
              </div>
            </div>

            <div className="button-sign-out">
              <div className="overlap-3">
                <div className="rectangle-3" />

                <div className="text-wrapper-9">Sign out</div>

                <img className="logout" alt="Logout" src={logout} />
              </div>
            </div>

            <div className="button-delete">
              <div className="overlap-5">
                <div className="rectangle-5" />

                <div className="text-wrapper-10">Delete account</div>

                <div className="rectangle-6" />
              </div>
            </div>

            <div className="button-support-us">
              <div className="overlap-5">
                <div className="rectangle-7" />

                <div className="rectangle-8" />

                <img
                  className="glowing-star"
                  alt="Glowing star"
                  src={glowingStar}
                />

                <div className="text-wrapper-11">Support us!</div>
              </div>
            </div>

            <div className="text-wrapper-12">Type about youself...</div>

            <img className="plus" alt="Plus" src={plus} />

            <img className="img" alt="Line" src={line7} />

            <div className="rectangle-9" />

            <div className="rectangle-10" />

            <div className="text-wrapper-13">Change username?</div>

            <img className="gear" alt="Gear" src={gear} />

            <div className="rectangle-11" />

            <div className="text-wrapper-14">New username...</div>

            <div className="frame">
              <img className="done" alt="Done" src={done} />
            </div>
          </div>

          <div className="rectangle-12" />
        </div>
      </div>
    </div>
  );
};