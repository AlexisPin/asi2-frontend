import { X } from 'lucide-react';

import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { useConnectedUsers } from '../hooks/useConnectedUsers';

interface HeaderProps {
  setIsOpen: Function;
  userDiscussionId: number;
  setUserDiscussionId: Function;
}

export const Header = ({ setIsOpen, userDiscussionId, setUserDiscussionId }: HeaderProps) => {
    
    const connectedUsers = useConnectedUsers();

    const selectItem = connectedUsers.map(user => <MenuItem value={user.id}>{user.surName}</MenuItem>)

  return (
    <Box sx={{ overflow: 'auto', p: 2, borderBottom: "1px solid #bccadb", display: 'flex' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userDiscussionId}
          label="userDiscussion"
          onChange={e => setUserDiscussionId(e.target.value)}
        >
            {selectItem}
        </Select>
      </FormControl>
      <IconButton
        aria-label="closeChat"
        color="primary"
        style={{
            marginLeft: "20px"
        }}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <X />
      </IconButton>
    </Box>
  );
};

export default Header;
