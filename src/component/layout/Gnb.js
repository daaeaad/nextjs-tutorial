import { Menu } from 'semantic-ui-react';

export default function Gnb() {
  const activeItem = 'Home';

  return (
    <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          // onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          // onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
  );
}