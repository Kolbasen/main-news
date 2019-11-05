import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import SideList from './SideList';

function SideDrawer(props) {
  const { sideDrawerOpen, toggleDrawer } = props;
  return (
    <div>
      <Drawer open={sideDrawerOpen} onClose={toggleDrawer(false)}>
        {<SideList toggleDrawer={toggleDrawer}/>}
      </Drawer>
    </div>
  );
}

export default SideDrawer;