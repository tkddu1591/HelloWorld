import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UserPopupProps {
   popupSetting: {
      top?: number;
      marginRight?: number;
      marginLeft?: number;
      lastData?: string;
      lastAction?: string;
      width?: number;
      left?: number;
      isPopup?: boolean;
   };
}

function UserPopup({ popupSetting }: UserPopupProps) {
   let navigate = useNavigate();

   function handleClick() {
      if (popupSetting.lastAction) {
         if (popupSetting.isPopup) {
            window.open(popupSetting.lastAction, '_blank', 'width=400,height=600');
         } else navigate(popupSetting.lastAction);
      }
   }

   return (
      <>
         <div
            style={{
               width: popupSetting.width ? popupSetting.width + 'px' : '',
               position: 'absolute',
               top: popupSetting.top + 'px',
               left: popupSetting.left ? popupSetting.left + 'px' : '',
               border: '1px solid lightgray',
               marginRight: popupSetting.marginRight + 'px',
               marginLeft: popupSetting.marginLeft + 'px',
               borderRadius: '2px',
               height: '30px',
               padding: '5px',
               backgroundColor: '#Fafafa',
            }}>
            <span
               style={{
                  paddingLeft: '5px',
                  cursor: 'pointer',
                  paddingRight: '5px',
               }}>
               신고
            </span>
            <span
               style={{
                  paddingLeft: '5px',
                  cursor: 'pointer',
                  paddingRight: '5px',
                  borderLeft: '1px solid black',
               }}>
               차단
            </span>
            {popupSetting.lastData && (
               <span
                  style={{
                     paddingLeft: '5px',
                     cursor: 'pointer',
                     paddingRight: '5px',
                     borderLeft: '1px solid black',
                  }}
                  onClick={handleClick}>
                  {popupSetting.lastData}
               </span>
            )}
         </div>
      </>
   );
}

export default UserPopup;